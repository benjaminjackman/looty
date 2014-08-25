package looty
package views

import looty.views.loot.{ColumnsPane, Columns, Containers, Filters}
import org.scalajs.jquery.JQuery

import scala.scalajs.js
import looty.model.{ComputedItem, LootContainerId}
import cgta.ojs.lang.JsObjectBuilder
import scala.concurrent.Future
import looty.poeapi.PoeCacher

import scala.language.postfixOps

class LootView(val league: String)(implicit val pc: PoeCacher) extends View {
  val obj = new JsObjectBuilder
  var grid    : js.Dynamic = null
  var dataView: js.Dynamic = js.Dynamic.newInstance(global.Slick.Data.DataView)()

  val columns    = new Columns
  val containers = new Containers
  val filters    = new Filters(containers, columns, (f: (ComputedItem => Boolean)) => dataView.setFilter(f))
  val refreshPane = new RefreshPane(league, containers, filters, updateContainer)
  val loadSavePane = new LoadSavePane(columns, containers, filters)
  val columnsPane = new ColumnsPane(columns)


  dataView.setIdGetter { (d: ComputedItem) => d.item.locationId.get}


  var colChangePending = false
  var conChangePending = false
  var resizeGridPending = false

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
      filters.setContainer(c.id, visible = c.visible)
      if (!conChangePending) {
        conChangePending = true
        global.setTimeout(() => {
          filters.refresh()
          conChangePending = false
        }, 50)
      }
      autoSizeGridHeight()
    }
  }


  private def autoSizeGridHeight() {
    if (!resizeGridPending) {
      resizeGridPending = true
      global.setTimeout(() => {
        val height = jq(global.window).height() - jq("#header").height() - jq("#controls").height() - 40
        console.log("RESIZE: ", height.toJs)
        jq("#grid").css("height", height)
        grid.resizeCanvas()
        resizeGridPending = false
      }, 50)
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
    val (refreshEl, fut) = refreshPane.start()
    controls.add("Clear Filters") {
      filters.clear()
      filters.refresh()
    }
    controls.add {
      val p = new ControlPane("Tabs")
      p.el.append(refreshEl)
      p
    }
    controls.add {
      val p = new ControlPane("Columns")
      p.el.append(columnsPane.start())
      p
    }
    controls.add {
      val p = loadSavePane.start()
      p
    }
    fut
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

    filters.refresh()

    grid.onHeaderRowCellRendered.subscribe((e: js.Dynamic, args: js.Dynamic) => {
      jq(args.node).empty()
      val el = jq("<input class='header-filter' type='text'>")
        .data("columnId", args.column.id)

      filters.columnFilters.get(args.column.id.asJsStr).foreach { fil =>
        el.`val`(fil.text)
      }

      el.on("keyup", () => {
        filters.add(args.column.id.toString, el.`val`().toString)
        dataView.refresh()
      })
      el.appendTo(args.node)
    })

    grid.onClick.subscribe { (e: js.Any, args: js.Dynamic) =>
      console.log("GRIDMINI CLICK", args, dataView.getItem(args.row))
    }

    addSort()
    addMouseover()
    jq(global.window).resize(() => autoSizeGridHeight())

    grid.init()
    autoSizeGridHeight()
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
  }
}


