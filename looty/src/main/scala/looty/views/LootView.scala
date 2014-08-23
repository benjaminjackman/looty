package looty
package views

import looty.model.ComputedItemProps.ComputedItemProp
import looty.views.LootView.{Container, Containers, Column, Columns, ControlPane, Controls}
import org.scalajs.jquery.{JQueryEventObject, JQuery, JQueryStatic}
import scala.scalajs.js
import looty.model.{StashTabIdx, InventoryId, LootContainerId, ComputedItemProps, ComputedItem}
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





//case class LootFilterContainer(id: LootContainerId)

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

  object Column {
    def apply(p: ComputedItemProp[_]) = {
      new Column(
        shortName = p.shortName,
        fullName = p.fullName,
        description = p.description,
        width = p.width,
        groups = p.groups,
        defaultNumFilter = p.defaultNumFilter,
        getJs = p.getJs,
        setJs = None
      )
    }
  }

  class Column(
    val shortName: String,
    val fullName: String,
    val description: String,
    val width: Int,
    val groups: Vector[String],
    val defaultNumFilter: Option[NumFilter],
    val getJs: (ComputedItem) => js.Any,
    val setJs: Option[String => Unit]) {
    def id = shortName
    lazy val slick = makeColumn(shortName, description, width)(getJs)

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
  //Location is StashX where X = index + 1
  //So first tab is Stash2
  //I think the hideouts have sometihng to do wit this
  //[linkItem location="Stash4" league="Rampage" x="0" y="0"]
  //[linkItem location="MainInventory" character="frostlarr" x="0" y="2"]


  object EditableColumns {
    val all = Nil //??? //new Column()
  }

  class Columns {
    val all    = ComputedItemProps.all.map(Column(_)) ++ EditableColumns.all
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

  class Container(val id: LootContainerId, html: JQuery, initialVisible: Boolean, refreshFn: () => Unit) {

    private var _items = Vector.empty[ComputedItem]
    def items = _items
    def setItems(items: Vector[ComputedItem]) {
      html.removeClass("loading")
      _items = items
    }
    def refresh() {
      html.addClass("loading")
      refreshFn()
    }


    val vis   = "visible-loot-container"
    val invis = "invisible-loot-container"

    private var listeners = Vector.empty[Boolean => Unit]
    private var _visible  = initialVisible

    private def refreshHtml() {
      if (visible) {
        html.addClass(vis).removeClass(invis)
      } else {
        html.addClass(invis).removeClass(vis)
      }

    }

    private def changed() {
      refreshHtml()
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

  class Containers {
    var _containers = Vector.empty[Container]
    var _allMap     = Map.empty[LootContainerId, Container]
    def all = _containers
    def addContainer(c: Container) {
      _containers :+= c
      _allMap += c.id -> c
      c.onChange(v => conChanged(c))
    }
    def get(id: LootContainerId): Option[Container] = _allMap.get(id)

    private def conChanged(c: Container) {
      changed(c)
    }

    private var listeners = Vector.empty[Container => Unit]
    def onChange(f: (Container) => Unit) {
      listeners :+= f
    }
    private def changed(c: Container) {
      listeners.foreach(_(c))
    }

  }
}


class LootView(val league: String)(implicit val pc: PoeCacher) extends View {
  val obj = new JsObjectBuilder
  //  var containers = immutable.Map.empty[LootContainerId, List[ComputedItem]]
  //  var buttons    = immutable.Map.empty[LootContainerId, JQuery]


  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]


  val columns              = new Columns
  val containers           = new Containers
  var grid    : js.Dynamic = null
  var dataView: js.Dynamic = js.Dynamic.newInstance(global.Slick.Data.DataView)()

  dataView.setIdGetter { (d: ComputedItem) => d.item.locationId.get}


  var colChangePending = false
  var conChangePending = false

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
    containers.onChange { (c) =>
      Filters.setContainer(c.id, visible = c.visible)
      if (!conChangePending) {
        conChangePending = true
        global.setTimeout(() => {
          Filters.refresh()
          conChangePending = false
        }, 50)
      }
      autoSizeGridHeight()
    }
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


  def updateContainer(containerId: LootContainerId, items: List[ComputedItem]) {
    dataView.beginUpdate()
    for {
      container <- containers.get(containerId)
      oldItem <- container.items
      locId <- oldItem.item.locationId.toOption
    } {
      dataView.deleteItem(locId)
    }
    containers.get(containerId).foreach(_.setItems(items.toVector))
    for {
      item <- items
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
      val p = new ControlPane("Tabs")
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

    val showAllBtn = jq("""<a href="javascript:void(0)" title="Will show all inventories and stash tabs">[Show All]</a>""")
    showAllBtn.click { () =>
      containers.all.foreach(_.show())
      Filters.refresh()
      false
    }
    val hideAllBtn = jq("""<a href="javascript:void(0)" title="Will Hide all inventories and stash tabs">[Hide All]</a>""")
    hideAllBtn.click { () =>
      containers.all.foreach(_.hide())
      Filters.refresh()
      false
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


    val reloadVisibleBtn = jq("""<button title="Connects to GGG servers and refreshes the visible tabs">Refresh Visible</button>""")
    reloadVisibleBtn.on("click", () => {
      containers.all.filter(_.visible).foreach(_.refresh())
    })



    val elChars = jq("<div>Characters: </div>")
    val elTabs = jq("<div>Tabs: </div>")

    el.append(elChars)
    el.append(elTabs)
    el.append(showAllBtn)
    el.append(hideAllBtn)
    el.append(reloadVisibleBtn)
    el.append(reloadAllBtn)


    val title = "Show / hide this tab. Shift-Click to refresh it."

    def addCon(conId: LootContainerId, button: JQuery, el: JQuery)(refreshFn: => Unit) {
      val con = new Container(conId, button, initialVisible = true, refreshFn = () => refreshFn)
      button.addClass("loading")
      button.addClass("visible-loot-container")
      containers.addContainer(con)
      Filters.setContainer(con.id, visible = con.visible)
      el.append(button)
      el.append(" ")
      button.on("click", (e: js.Dynamic) => {
        //Filter the grid to show only that tab
        if (e.shiftKey.asInstanceOf[js.Boolean]) {
          con.refresh()
        } else {
          con.toggle()
        }
        false
      })
    }

    //Buttons for characters
    val charBtnsFut = for {
      chars <- pc.getChars(forceNetRefresh = false)
    } yield {
      chars.foreach { char =>
        if (char.league.toString =?= league) {
          val button = jq(s"""<a title="$title" href="javascript:void(0)">${char.name}</a>""")
          button.data("charName", char.name)

          val conId: LootContainerId = InventoryId(char.name)

          addCon(conId, button, elChars) {
            pc.getInv(char.name, forceNetRefresh = true).foreach { st =>
              val items = for (item <- st.allItems(None)) yield ItemParser.parseItem(item, conId, char.name)
              updateContainer(conId, items)
            }
          }
        }
      }
    }

    //Buttons for stash tabs
    val tabBtnsFut = for {
      stis <- pc.getStashInfo(league, forceNetRefresh = false)
    } yield {
      stis.foreach { sti =>
        val index = sti.i
        val button = jq(s"""<a class="tab-btn" href="javascript:void(0)" title="${title + s" the index of this tab is: $index"}"></a>""")
        button.text(sti.n)
        button.css("textShadow", "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black")
        button.css("backgroundColor", sti.colour.toRgb)

        val conId: LootContainerId = StashTabIdx((sti.i: Double).toInt)

        addCon(conId, button, elTabs) {
          pc.getStashTab(league, sti.i.toInt, forceNetRefresh = true).foreach { st =>
            val items = for (item <- st.allItems(None)) yield ItemParser.parseItem(item, conId, sti.n)
            updateContainer(conId, items)
          }
        }
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
    val grouped = columns.all.groupBy(_.groups.head)
    val groups = columns.all.map(_.groups.head).distinct
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
      grpDiv.append(s"""<span style="color:pink">$groupName:</span>""")

      group.foreach { c =>
        val colDiv = jq(s"""<div style="display:inline-block" title="${c.description}"></div>""")
        val onSpan = s"""<span>${c.id}</span><span style="color:#00FF00">[on]</span>"""
        val offSpan = s"""<span>${c.id}</span><span style="color:#FF0000">[off]</span>"""
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
      val saveName = jq("""<input type="text" placeholder="save name" width="20"></input>""")
      val saveBtn = jq("""<a href="javascript:void(0)" title="Saves the currently visible columns">[Save]</a>""")
      val saveWithFiltersBtn = jq("""<a href="javascript:void(0)" title="Saves the currently visible columns as well as any filters that are currently active">[Save+Filters]</a>""")

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
              saveName.`val`(name)
              Saver.load(name)(colId => columns.get(colId)) foreach {
                case (cols, colFilters, conIds) =>
                  columns.all.foreach(_.hide())
                  cols.foreach(_.show())
                  colFilters.foreach { colFilters =>
                    Filters.clearColumnFilters()
                    colFilters.foreach { colFilter =>
                      Filters.addColFilter(colFilter)
                    }
                    Filters.refresh()
                  }
                  conIds.foreach { conIds =>
                    containers.all.foreach(_.hide())
                    conIds.foreach { conId =>
                      containers.get(conId).foreach(_.show())
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


      saveBtn.on("click", () => {
        val name = saveName.`val`().toString
        Saver.save(name, columns.visible, None, None)
        refreshLoadDiv()
        false
      })
      saveWithFiltersBtn.on("click", () => {
        val name = saveName.`val`().toString
        Saver.save(
          name,
          columns.visible,
          columnFilters = Some(Filters.columnFilters.values.toVector),
          containerFilters = Some(Filters.containerFilters.toVector)
        )
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
        val v = column.getter(item.asInstanceOf[js.Any])
        val vAny = v.asInstanceOf[js.Any]
        if (vAny.isInstanceOf[js.Number]) {
          val d = vAny.asInstanceOf[js.Number]
          if (d == 0.0) {
            ""
          } else {
            v
          }
        } else {
          v
        }
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
    //    def isVisible(id: LootContainerId) = {
    //      containerFilters(id)
    //    }

    def setContainer(id: LootContainerId, visible: Boolean) {
      if (visible) {
        containerFilters += id
      } else {
        containerFilters -= id
      }
    }

    def clearColumnFilters() {
      jq(".header-filter").`val`("")
      columnFilters = Map.empty[String, LootFilterColumn]
    }

    def clearContainerFilters() {
      containers.all.foreach(_.show())
    }

    def clear() {
      clearColumnFilters()
      clearContainerFilters()
    }
    var columnFilters    = Map.empty[String, LootFilterColumn]
    var containerFilters = Set.empty[LootContainerId]

    def addColFilter(filter: LootFilterColumn) {
      columnFilters += filter.col.id -> filter
    }

    def add(colId: String, text: String) {
      val col = columns.get(colId)
      if (text.trim.isEmpty) {
        columnFilters -= colId
      } else {
        val fil = LootFilterColumn.parse(text, col.get)
        columnFilters += colId -> fil
      }
    }


    def refresh() {
      def filter(item: ComputedItem): js.Boolean = {
        def columnsAllows = columnFilters.forall { case (colId, fil) =>
          fil.allows(item)
        }
        def containerAllows = containerFilters(item.containerId)

        (columnsAllows && containerAllows).toJs
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


