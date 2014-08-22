package looty
package views

import looty.model.ComputedItemProps.ComputedItemProp
import looty.views.LootView.{Column, Columns, ControlPane, Controls}
import org.scalajs.jquery.{JQueryEventObject, JQuery, JQueryStatic}
import scala.scalajs.js
import looty.model.{StashTabId, InventoryId, LootContainerId, ComputedItemProps, ComputedItem}
import scala.collection.immutable
import cgta.ojs.lang.JsObjectBuilder
import scala.concurrent.Future
import looty.model.parsers.ItemParser
import looty.poeapi.PoeCacher


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:17 PM
//////////////////////////////////////////////////////////////
import scala.language.postfixOps

object Saver {
  val localStorage = global.localStorage
  val prefix       = "LOOTVIEW-SAVE-COLUMNS:"

  def delete(name :String) {
    localStorage.removeItem(prefix + name)
  }

  def save(name: String, cols: Vector[Column], columnFilters: Option[Vector[LootFilter]]) {
    if (name.isEmpty) {
      Alerter.error("Hey fella, you have to type a name in the name box!")
      return
    } else if (name.length > 50) {
      Alerter.error("Hey fella, names are limited to 50 characters!")
      return
    }
    val k = prefix + name.take(50)

    val data = js.Dynamic.literal()
    data.cols = cols.map(_.id).toJsArray
    columnFilters.foreach { filters =>
      data.columnFilters = filters.filter(_.col.isDefined).map { filter =>
        val fd = js.Dynamic.literal()
        fd.text = filter.text
        fd.col = filter.col.get.id
        fd
      } toJsArray
    }
    val json = global.JSON.stringify(data).toString
    localStorage.setItem(k, json)
  }

  def load(name: String)(getCol: String => Option[Column]): Option[(Vector[Column], Option[Vector[LootFilter]])] = {
    val k = prefix + name
    localStorage.getItem(k).nullSafe.map { json =>
      val data = global.JSON.parse(json)
      val cols = data.cols.asJsArr[String].toVector.flatMap(c => getCol(c.toString))
      val filters = if (!data.columnFilters.isUndefined) {
        Some {
          data.columnFilters.asJsArr[js.Dynamic].toVector.flatMap { f =>
            getCol(f.col.toString).map { col =>
              val text = f.text.toString
              LootFilter.parse(text, col)
            }
          }
        }
      } else {
        None
      }
      cols -> filters
    }
  }

  def getAllNames: Vector[String] = {
    val sz = localStorage.length.asInstanceOf[Int]
    val keys = (0 until sz) map (i => localStorage.key(i).toString) filter (_.startsWith(prefix))
    val names = keys map (_.drop(prefix.length))
    names.toVector
  }
}

object LootFilter {
  def all = LootFilter("All", None, _ => true)
  def parse(text: String, col: Column): LootFilter = {
    def numFilter(n: String)(p: (Double, Double) => Boolean) = {
      val x = n.toDouble
      LootFilter(text, Some(col), i => p(col.p.getJs(i).toString.toDouble, x))
    }
    val GT = ">(.*)".r
    val GTE = ">=(.*)".r
    val LT = "<(.*)".r
    val LTE = "<=(.*)".r
    val EQ = "=(.*)".r

    try {
      text.trim match {
        case GTE(n) if n.nonEmpty => numFilter(n)(_ >= _)
        case GT(n) if n.nonEmpty => numFilter(n)(_ > _)
        case LTE(n) if n.nonEmpty => numFilter(n)(_ <= _)
        case LT(n) if n.nonEmpty => numFilter(n)(_ < _)
        case EQ(n) if n.nonEmpty => numFilter(n)(_ == _)
        case "" => LootFilter(text, Some(col), i => true)
        case s =>
          val toks = s.split(" ")
          LootFilter(text, Some(col), (i) => {
            val value = col.p.getJs(i).toString.toLowerCase
            toks.exists(tok => value.matches(".*" + tok.toLowerCase + ".*"))
          })
      }
    } catch {
      case e: Throwable =>
        LootFilter(text, Some(col), i => true)
    }
  }
}

case class LootFilter(text: String, col: Option[Column], p: ComputedItem => Boolean) {
  def allows(i: ComputedItem): Boolean = {
    try p(i) catch {case e: Throwable => false}
  }
}

object LootView {
  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]

  class ControlPane(val name: String) {
    lazy val el = jq("""<div style="display:none"></div>""")
    def toggle() {
      if (el.is(":visible")) {
        el.hide()
      } else {
        el.show()
      }
    }
  }

  class Controls(gOnClick: () => Unit) {
    lazy val el   = jq("""<div id="controls"></div>""")
    lazy val menu = {
      val m = jq("<div></div>")
      el.append(m)
      m
    }
    var panes: List[ControlPane] = Nil
    def add(text: String)(onClick: => Unit) {
      val m = jq(s"""<a href="javascript:void(0)">[$text]</a>""")
      m.on("click", () => {
        onClick
        gOnClick()
        false
      })
      menu.append(m)
    }
    def add(pane: ControlPane) {
      val m = jq(s"""<a href="javascript:void(0)">[${pane.name}]</a>""")
      m.on("click", () => {
        panes.filterNot(_ =?= pane).foreach(_.el.hide())
        pane.toggle()
        gOnClick()
        false
      })
      menu.append(m)
      el.append(pane.el)
      panes :+= pane
    }
  }

  class Column(val p: ComputedItemProp[_]) {
    def id = p.shortName
    lazy val slick = makeColumn(p.shortName, p.description, p.width)(p.getJs)

    def makeColumn(name: String, tooltip: String, width: Int)(f: ComputedItem => js.Any) = {
      val o = newObject
      o.id = name
      o.name = name
      o.field = name
      o.toolTip = tooltip
      o.sortable = true
      o.getter = f
      if (width =?= -1) o.width = 50 else o.width = width
      o
    }

    private var listeners = Vector.empty[Boolean => Unit]
    private var _visible  = true
    private def changed() {
      listeners.foreach(_(_visible))
    }

    def visible = _visible

    def hide() {
      _visible = false
      changed()
    }
    def show() {
      _visible = true
      changed()
    }
    def toggle() {
      _visible = !_visible
      changed()
    }

    def onChange(f: Boolean => Unit) {
      listeners :+= f
    }
  }

  class Columns {
    val all    = ComputedItemProps.all.map(new Column(_))
    val allMap = immutable.Map(all.map(c => c.id -> c): _*)

    def visible = all.filter(_.visible)
    all.foreach(c => c.onChange(v => colChanged(c)))

    private def colChanged(c: Column) {
      changed()
    }

    private var listeners = Vector.empty[() => Unit]
    def onChange(f: () => Unit) {
      listeners :+= f
    }
    private def changed() {
      listeners.foreach(_())
    }

    def getJsArray(): js.Array[js.Dynamic] = {
      val cols = js.Array[js.Dynamic]()
      visible.foreach(c => cols.push(c.slick))
      cols
    }
    def get(id: String): Option[Column] = allMap.get(id)


  }
}


class LootView(val league: String)(implicit val pc: PoeCacher) extends View {
  val obj        = new JsObjectBuilder
  var containers = immutable.Map.empty[LootContainerId, List[ComputedItem]]
  var buttons    = immutable.Map.empty[LootContainerId, JQuery]


  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]

  val columns              = new Columns
  var grid    : js.Dynamic = null
  var dataView: js.Dynamic = js.Dynamic.newInstance(global.Slick.Data.DataView)()

  dataView.setIdGetter { (d: ComputedItem) => d.item.locationId.get}


  var colChangePending = false

  def start(el: JQuery) {
    console.log("Starting Grid View")
    setHtml(el).foreach(x => addAllItems)
    columns.onChange { () =>
      if (!colChangePending) {
        colChangePending = true
        global.setTimeout(() => {
          grid.setColumns(columns.getJsArray())
          colChangePending = false
        }, 50)
      }
    }
    autoSizeGridHeight()
  }

  def addAllItems {
    for {
      cons <- pc.getAllContainersFuture(league)
      conFut <- cons
      (conId, con) <- conFut
    } {
      updateContainer(conId, con)
    }
  }


  def updateContainer(containerId: LootContainerId, container: List[ComputedItem]) {
    dataView.beginUpdate()
    for {
      container <- containers.get(containerId)
      item <- container
      locId <- item.item.locationId.toOption
    } {
      dataView.deleteItem(locId)
    }
    containers += containerId -> container
    //    buttons.get(containerId).foreach(_.css("border-color", ""))
    buttons.get(containerId) match {
      case Some(btn) => btn.removeClass("loading")
      case None => console.error("No button for container", containerId)
    }
    for {
      item <- container
    } {
      dataView.addItem(item.asInstanceOf[js.Any])
    }
    dataView.endUpdate()
  }


  def stop() {}

  private def setHtml(el: JQuery): Future[Unit] = {
    val controls = new Controls(() => autoSizeGridHeight())

    el.append(controls.el)
    el.append("""<div id="grid"></div>""")
    appendGrid()
    el.append("""<div id="itemdetail" style="z-index:100;color:white;background-color:black;opacity:.9;display:none;position:fixed;left:50px;top:100px">SAMPLE DATA<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a</div>""")
    val (refreshEl, fut) = createRefreshPane()
    controls.add("Clear Filters") {
      Filters.clear()
      Filters.refresh()
    }
    controls.add {
      val p = new ControlPane("Refresh")
      p.el.append(refreshEl)
      p
    }
    controls.add {
      val p = new ControlPane("Columns")
      p.el.append(createColumnsPane())
      p
    }
    fut
  }


  private def createRefreshPane(): (JQuery, Future[Unit]) = {
    val el = jq("<div></div>")

    val elClear = jq("<div></div>")
    el.append(elClear)

    val showAllBtn = jq("""<button title="Will show all inventories and stash tabs">Show All Tabs</button>""")
    showAllBtn.click { () =>
      Filters.tabFilter = LootFilter.all
      Filters.refresh()
    }

    val reloadAllBtn = jq("""<button title="Use this button after you move or rename premium stash tabs, or
    |have changed several tabs. This will take some time, as GGG throttles the number of requests made per minute
    |to get this data.">Clear And Reload Everything For This League From Server</button>""".stripMargin)

    reloadAllBtn.click { () =>
      if (global.confirm("Are you sure? This might take some time").asInstanceOf[Boolean]) {
        pc.clearLeague(league).foreach { x =>
          global.location.reload()
        }
        Alerter.reloadMsg()
      } else {
        Alerter.noReloadMsg()
      }
    }

    elClear.append(reloadAllBtn)

    val elTabs = jq("<div></div>")
    val elChars = jq("<div></div>")

    el.append(showAllBtn)
    el.append(elChars)
    el.append(elTabs)

    val title = "Refresh this stash tab / character inventory from pathofexile.com, and then show only this tab."

    //Buttons for characters
    val charBtnsFut = for {
      chars <- pc.getChars(forceNetRefresh = false)
    } yield {
      chars.foreach { char =>
        if (char.league.toString =?= league) {
          val button = jq(s"""<a title="$title" href="javascript:void(0)">[${char.name}]</a> """)
          button.data("charName", char.name)
          val conId: LootContainerId = InventoryId(char.name)
          buttons += conId -> button
          if (!containers.contains(conId)) button.addClass("loading")
          elChars.append(button)
          button.on("click", (a: js.Any) => {
            //Refresh this tab
            pc.getInv(char.name, forceNetRefresh = true).foreach { st =>
              val items = for (item <- st.allItems(None)) yield ItemParser.parseItem(item, conId, char.name)
              updateContainer(conId, items)
            }
            //Filter the grid to show only that tab
            Filters.tabFilter = LootFilter("Only One Tab", None, _.containerId =?= conId)
          })
        }
      }
    }

    //Buttons for stash tabs
    val tabBtnsFut = for {
      stis <- pc.getStashInfo(league, forceNetRefresh = false)
    } yield {
      stis.foreach { sti =>
        val button = jq(s"""<button title="$title">${sti.n}</button>""")
        button.css(obj[js.Any](
          color = "white",
          textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          backgroundColor = sti.colour.toRgb
        ))
        val conId: LootContainerId = StashTabId((sti.i: Double).toInt)
        buttons += conId -> button
        if (!containers.contains(conId)) button.addClass("loading")
        elTabs.append(button)
        button.on("click", (a: js.Any) => {
          //Refresh this tab
          pc.getStashTab(league, sti.i.toInt, forceNetRefresh = true).foreach { st =>
            val items = for (item <- st.allItems(None)) yield ItemParser.parseItem(item, conId, sti.n)
            updateContainer(conId, items)
          }
          //Filter the grid to show only that tab
          Filters.tabFilter = LootFilter("Only One Tab", None, _.containerId =?= conId)
        })
      }
    }

    el -> Future.sequence(List(tabBtnsFut, charBtnsFut)).map(x => Unit)
  }

  private def createColumnsPane(): JQuery = {
    val el = jq("""<div id="columns-controls"></div>""")
    val showAll = jq("<a href='javascript:void(0)'>[All +]</a>")
    showAll.on("click", () => {
      columns.all.foreach(_.show())
      false
    })
    val hideAll = jq("<a href='javascript:void(0)'>[All -]</a>")
    hideAll.on("click", () => {
      columns.all.foreach(_.hide())
      false
    })
    val grouped = columns.all.groupBy(_.p.groups.head)
    val groups = columns.all.map(_.p.groups.head).distinct
    groups.foreach { groupName =>
      val group = grouped(groupName)
      val grpDiv = jq(s"""<div></div>""")
      val grpOn = jq("<a href='javascript:void(0)'>[+]</a>")
      grpOn.on("click", () => {
        group.foreach(_.show())
        false
      })

      val grpOff = jq("<a href='javascript:void(0)'>[-]</a>")
      grpOff.on("click", () => {
        group.foreach(_.hide())
        false
      })

      grpDiv.append(grpOn)
      grpDiv.append(grpOff)
      grpDiv.append(s"""<span style="color:pink">$groupName</span>:""")

      group.foreach { c =>
        val colDiv = jq(s"""<div style="display:inline-block" title="${c.p.description}"></div>""")
        colDiv.append(s"<span>${c.id}</span>")
        val onSpan = "<span style=\"color:#00FF00\">[on]</span>"
        val offSpan = "<span style=\"color:#FF0000\">[off]</span>"
        val curSpan = if (c.visible) onSpan else offSpan
        val tog = jq(s"""<a href='javascript:void(0)'>$curSpan</a>&nbsp;&nbsp;&nbsp;""")
        tog.on("click", () => {
          c.toggle()
          false
        })
        c.onChange(isOn => tog.html(if (isOn) onSpan else offSpan))
        colDiv.append(tog)
        grpDiv.append(colDiv)
      }

      el.append(grpDiv)
    }

    //Load / Save Stuff
    val loadSaveDiv = jq("<div></div>")
    locally {
      val loadDiv = jq("""<span></span>""")
      def refreshLoadDiv() {
        loadDiv.empty()
        Saver.getAllNames.sortBy(_.toUpperCase).foreach { name =>
          val el = jq(s"""<a href="javascript:void(0)" title="Load this saved item, shift clicking gives the option to erase it."></a>""")
          el.text(s"[$name]")
          el.on("click", { (e: JQueryEventObject) =>
            if (e.asJsDyn.shiftKey.asInstanceOf[js.Boolean]) {
              Saver.delete(name)
              refreshLoadDiv()
            } else {
              Saver.load(name)(colId => columns.get(colId)) foreach {
                case (cols, colFilters) =>
                  columns.all.foreach(_.hide())
                  cols.foreach(_.show())
                  colFilters.foreach { colFilters =>
                    Filters.clear()
                    colFilters.foreach { colFilter =>
                      Filters.addColFilter(colFilter)
                    }
                    Filters.refresh()
                  }
              }
            }
            false
          }: js.Function)
          loadDiv.append(el)
        }
      }
      val saveName = jq("""<input type="text" placeholder="save name" width="20"></input>""")
      val saveBtn = jq("""<a href="javascript:void(0)" title="Saves the currently visible columns">[Save]</a>""")
      val saveWithFiltersBtn = jq("""<a href="javascript:void(0)" title="Saves the currently visible columns as well as any filters that are currently active">[Save+Filters]</a>""")
      saveBtn.on("click", () => {
        val name = saveName.`val`().toString
        Saver.save(name, columns.visible, None)
        refreshLoadDiv()
        false
      })
      saveWithFiltersBtn.on("click", () => {
        val name = saveName.`val`().toString
        Saver.save(name, columns.visible, columnFilters = Some(Filters.columnFilters.values.toVector))
        refreshLoadDiv()
        false
      })
      refreshLoadDiv()
      loadSaveDiv.append(showAll)
      loadSaveDiv.append(hideAll)
      loadSaveDiv.append(saveName)
      loadSaveDiv.append(saveBtn)
      loadSaveDiv.append(saveWithFiltersBtn)
      loadSaveDiv.append(" Load: ")
      loadSaveDiv.append(loadDiv)
      el.append(loadSaveDiv)
    }

    el
  }

  private def appendGrid() {

    val options = {
      val o = newObject
      o.enableCellNavigation = true
      o.enableColumnReorder = false
      o.multiColumnSort = true
      o.showHeaderRow = true
      o.headerRowHeight = 30
      o.explicitInitialization = true
      o.dataItemColumnValueExtractor = (item: ComputedItem, column: js.Dynamic) => {
        column.getter(item.asInstanceOf[js.Any])
      }
      o
    }

    grid = js.Dynamic.newInstance(global.Slick.Grid)("#grid", dataView, columns.getJsArray(), options)

    dataView.onRowCountChanged.subscribe(() => {
      grid.updateRowCount()
      grid.render()
    })

    dataView.onRowsChanged.subscribe((e: js.Dynamic, args: js.Dynamic) => {
      grid.invalidateRows(args.rows)
      grid.render()
    })

    Filters.refresh()

    grid.onHeaderRowCellRendered.subscribe((e: js.Dynamic, args: js.Dynamic) => {
      jq(args.node).empty()
      val el = jq("<input class='header-filter' type='text'>")
        .data("columnId", args.column.id)

      Filters.columnFilters.get(args.column.id.asJsStr).foreach { fil =>
        el.`val`(fil.text)
      }

      el.on("keyup", () => {
        Filters.add(args.column.id.toString, el.`val`().toString)
        dataView.refresh()
      })
      el.appendTo(args.node)
    })

    addSort()
    addMouseover()
    jq(global.window).resize(() => autoSizeGridHeight())

    grid.init()
    autoSizeGridHeight()
  }

  private def autoSizeGridHeight() {
    val height = jq(global.window).height() - jq("#header").height() - jq("#controls").height() - 40
    console.log("RESIZE: ", height.toJs)
    jq("#grid").css("height", height)
    grid.resizeCanvas()
  }


  object Filters {
    def clear() {
      jq(".header-filter").`val`("")
      columnFilters = Map.empty[String, LootFilter]
      tabFilter = LootFilter.all
    }
    var columnFilters = Map.empty[String, LootFilter]
    var tabFilter     = LootFilter.all

    def addColFilter(filter: LootFilter) {
      columnFilters += filter.col.get.id -> filter
    }

    def add(colId: String, text: String) {
      val col = columns.get(colId)
      if (text.trim.isEmpty) {
        columnFilters -= colId
      } else {
        val fil = LootFilter.parse(text, col.get)
        columnFilters += colId -> fil
      }
    }

    def refresh() {
      def filter(item: ComputedItem): js.Boolean = {
        (columnFilters.forall { case (colId, fil) =>
          fil.allows(item)
        } && tabFilter.allows(item)).toJs
      }

      dataView.setFilter(filter _)
    }
  }


  private def addSort() {
    grid.onSort.subscribe((e: js.Dynamic, args: js.Dynamic) => {
      val cols = args.sortCols.asInstanceOf[js.Array[js.Dynamic]]

      dataView.sort {
        (a: ComputedItem, b: ComputedItem) =>
          var i = 0
          var ret = 0.0
          while (i < cols.length && ret == 0) {
            val col = cols(i)
            val sign = if (cols(i).sortAsc.asInstanceOf[js.Boolean]) 1 else -1
            val a1: js.Dynamic = col.sortCol.getter(a.asInstanceOf[js.Any])
            val b1: js.Dynamic = col.sortCol.getter(b.asInstanceOf[js.Any])

            val res = a1 - b1
            if (js.isNaN(res)) {
              if (a1.toString > b1.toString) {
                ret = sign
              } else if (b1.toString > a1.toString) {
                ret = -sign
              }

            } else {
              ret = sign * res
            }

            i += 1
          }
          ret: js.Number
      }

      grid.invalidate()
      grid.render()
    })
  }

  private def addMouseover() {
    grid.onMouseEnter.subscribe((e: js.Dynamic, args: js.Any) => {
      val row = grid.getCellFromEvent(e).row
      if (row.nullSafe.isDefined) {
        val (top, bottom) = if (e.clientY / global.window.innerHeight < .5) {
          Some(e.clientY.asJsNum + 10) -> None
        } else {
          None -> Some(global.window.innerHeight - e.clientY + 10)
        }

        val (right, left) = if (e.clientX / global.window.innerWidth < .5) {
          None -> Some(e.clientX.asJsNum + 10)
        } else {
          Some(global.window.innerWidth - e.clientX + 10) -> None
        }

        val item = grid.getDataItem(row).asInstanceOf[ComputedItem]
        showItemDetail(top, right, bottom, left, item)
      }
    })
    grid.onMouseLeave.subscribe((e: js.Dynamic, args: js.Any) => {
      jq("#itemdetail").hide()
    })
  }


  def showItemDetail(
    top: Option[js.prim.Number],
    right: Option[js.prim.Number],
    bottom: Option[js.prim.Number],
    left: Option[js.prim.Number],
    item: ComputedItem) {

    val d = jq("#itemdetail")
    d.show()
    d.css("top", top.getOrElse("".toJs))
    d.css("right", right.getOrElse("".toJs))
    d.css("bottom", bottom.getOrElse("".toJs))
    d.css("left", left.getOrElse("".toJs))
    val color = item.item.getFrameType.color
    def requirements = {
      val xs = for {
        rs <- item.item.requirements.toOption.toList
        r <- rs.toList
        n <- r.name.toOption.toList
        vs <- r.values.toList
      } yield {
        s"$n ${vs(0).toString}"
      }
      xs.oIf(_.nonEmpty, _ => xs.mkString("Requires ", ", ", ""), _ => "")
    }
    def properties = {
      (for {
        props <- item.item.properties.toOption.toList
        prop <- props.toList
      } yield {
        val vs = for {
          v <- prop.values.toList
        } yield {
          v(0)
        }
        prop.name + " " + vs.mkString("")
      }).mkString("<br>")
    }
    def flavorText = {
      item.item.flavourText.toOption.map(_.toList.mkString("<br>")).getOrElse("")
    }
    val sections = List(
      item.item.name.toString,
      item.item.typeLine.toString,
      s"Location: ${item.locAndCoords}",
      if (item.socketColors.nonEmpty) "Sockets: " + item.socketColors else "",
      properties,
      requirements,
      item.item.descrText.toOption.map(_.toString).getOrElse(""),
      item.item.implicitModList.mkString("<br>"),
      item.item.explicitModList.mkString("<br>"),
      item.item.secDescrText.toOption.map(_.toString).getOrElse(""),
      item.item.cosmeticMods.toOption.map(_.mkString("<br>")).getOrElse(""),
      flavorText,
      if (item.item.identified.toOption.map(x => x: Boolean).getOrElse(true)) "" else "Not Identified",
      if (item.item.corrupted.toOption.map(x => x: Boolean).getOrElse(false)) "Corrupted" else "",
      if (item.item.duplicated.toOption.map(x => x: Boolean).getOrElse(false)) "Mirrored" else ""
    ).filter(_.nonEmpty)
    val h = s"""
    <div style="color:$color;padding:5px">
    ${sections.mkString("<hr>")}
    </div>
    """

    d.html(h)

    console.log(item)
  }
}


