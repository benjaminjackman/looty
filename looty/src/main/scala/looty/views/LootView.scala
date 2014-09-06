package looty
package views

import looty.views.loot.{Columns, ColumnsPane, Containers, Filters, UpgradesPane}
import org.scalajs.dom.{Blob, BlobPropertyBag}
import org.scalajs.jquery.JQuery

import scala.scalajs.js
import looty.model.{ComputedItem, ComputedItemProps, LootContainerId}
import cgta.ojs.lang.JsObjectBuilder
import scala.concurrent.Future
import looty.poeapi.PoeCacher
import scala.language.postfixOps


case class FilterCell(columnId: String, initValue: Option[String])(onChange: (String) => Unit) {
  val el = jq("<input class='header-filter' type='text'>")
    .data("columnId", columnId)

  initValue.foreach { x => el.`val`(x)}

  def set(v: String) {
    el.`val`(v)
  }

  el.on("keyup", { () => onChange(el.`val`().toString)})

}


object WebSqlDatabase {
  def open(name: String, version: String, description: String, estimatedSize: Int): WebSqlDatabase =
    global.openDatabase(name, version, description, estimatedSize).asInstanceOf[WebSqlDatabase]

}

trait WebSqlResultSet {

}


trait WebSqlTransaction extends js.Object {
  def executeSql(sql: String): Unit = ???
  def executeSql(sql: String, values: js.Array[Any]): Unit = ???
  def executeSql(sql: String, values: js.Array[Any], f: js.Function2[WebSqlTransaction, WebSqlResultSet, _]): Unit = ???
}

trait WebSqlDatabase extends js.Object {
  def transaction(f: js.Function1[WebSqlTransaction, _]): Unit = ???
}


class LootView(val league: String)(implicit val pc: PoeCacher) extends View {
  val obj                               = new JsObjectBuilder
  var grid       : js.Dynamic           = null
  var dataView   : js.Dynamic           = js.Dynamic.newInstance(global.Slick.Data.DataView)()
  var upgradeItem: Option[ComputedItem] = None
  var filterCells                       = Map.empty[String, FilterCell]



  val columns         = new Columns
  val containers      = new Containers
  val filters         = new Filters(containers, columns, (f: (ComputedItem => Boolean)) => dataView.setFilter(f))
  val refreshPane     = new RefreshPane(league, containers, filters, updateContainer)
  val loadSavePane    = new LoadSavePane(columns, containers, filters)
  val columnsPane     = new ColumnsPane(columns)
  //  val scoresPane      = new ScoresPane(columns)
  val itemDetailHover = new ItemDetailHover()
  val upgradesPane    = new UpgradesPane(league, itemDetailHover, setUpgradeItem, setLvlFilter)

  def setUpgradeItem(item: Option[ComputedItem]) {
    upgradeItem = item
    item.foreach { item =>
      setFilter(ComputedItemProps.TypeName.shortName, item.typeName.replaceAll(" ", "."))
    }
    dataView.refresh()
    grid.invalidateAllRows()
    grid.render()
  }

  def setLvlFilter(lvl: Int) {
    setFilter(ComputedItemProps.RequiredLevel.shortName, lvl.toString)
  }

  def setFilter(id: String, v: String) {
    filterCells.get(id).foreach { cell =>
      filters.add(id, v)
      cell.set(v)

    }
    filters.refresh()
  }


  dataView.setIdGetter { (d: ComputedItem) => d.item.locationId.get}


  var colChangePending  = false
  var conChangePending  = false
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
//      tempAddItem(item)
      dataView.addItem(item.asInstanceOf[js.Any])
    }
    dataView.endUpdate()
  }


//  val db = locally {
//    val db = WebSqlDatabase.open("sampledb", "1.0", "Experimenting with an items db", 10 * 1024 * 1024)
//    db.transaction { (tx: WebSqlTransaction) =>
//      tx.executeSql("DROP TABLE IF EXISTS items")
//      tx.executeSql("CREATE TABLE IF NOT EXISTS items (location TEXT NOT NULL PRIMARY KEY, fire_resist INTEGER, armour INTEGER)")
//    }
//    db
//  }
//
//
//  def tempAddItem(item: ComputedItem) {
//    db.transaction { (tx: WebSqlTransaction) =>
//      tx.executeSql("""INSERT INTO items (location, fire_resist, armour) VALUES (?,?,?)""",
//        js.Array(item.locationId, item.plusTo.resistance.fire, item.total.armour))
//    }
//
//  }


  def stop() {}

  private def setHtml(el: JQuery): Future[Unit] = {
    val controls = new Controls(() => autoSizeGridHeight())

    el.append(controls.el)
    el.append("""<div id="grid"></div>""")
    appendGrid()
    el.append(itemDetailHover.el)
    val (refreshEl, fut) = refreshPane.start()
    controls.add("Clear Filters") {
      filters.clear()
      filters.refresh()
    }
    controls.add {
      val p = new ControlPane("Upgrades")
      p.el.append(upgradesPane.start())
      p
    }
    controls.add {
      val p = new ControlPane("Refresh/Tabs")
      p.el.append(refreshEl)
      p
    }
    controls.add {
      val p = new ControlPane("Columns")
      p.el.append(columnsPane.start())
      p
    }
    controls.add("Export Csv") {
      val O = js.Dynamic.literal
      val cols = columns.all
      val header = cols.map(_.fullName).mkString(",")
      val rows = dataView.getItems().asJsArr[ComputedItem].toList.map { row =>
        cols.map(_.getJs(row)).mkString(",")
      }
      val csv = header + "\n" + rows.mkString("\n")
      val blob = new Blob(js.Array(csv), O(`type` = "text/plain;charset=utf-8").asInstanceOf[BlobPropertyBag])
      global.saveAs(blob, "item-export.csv")
    }
    controls.add {
      val p = loadSavePane.start()
      p
    }


    fut
  }

  private def renderCell(item: ComputedItem, column: js.Dynamic) = {
    val v = column.getter(item.asInstanceOf[js.Any]).asInstanceOf[js.Any]
    v match {
      case v: js.prim.Number =>
        val dbl = v.toDouble
        upgradeItem match {
          case Some(item) => column.getter(item.asInstanceOf[js.Any]).asInstanceOf[js.Any] match {
            case v: js.prim.Number =>
              val diff = dbl - v
              if (diff > 0) {
                math.round(diff).toDouble
              } else if (diff == 0.0 && dbl == 0.0) {
                ""
              } else {
                diff
              }
            case _ => if (dbl == 0.0) "" else dbl
          }
          case None => if (dbl == 0.0) "" else dbl
        }
      case v => v
    }
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
        renderCell(item, column)
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
      val columnId = args.column.id.asJsStr
      val initValue = filters.columnFilters.get(args.column.id.asJsStr).map(_.text)

      val cell = FilterCell(columnId, initValue) { x =>
        filters.add(args.column.id.toString, x)
        dataView.refresh()
      }

      filterCells += args.column.id.asJsStr -> cell

      cell.el.appendTo(args.node)
    })

    grid.onClick.subscribe { (e: js.Dynamic, args: js.Dynamic) =>
      val item: ComputedItem = dataView.getItem(args.row).asInstanceOf[ComputedItem]
      if (e.shiftKey.asJsBool) {
        refreshPane.refreshContainer(item.containerId)
      }

      console.log(e, "GRIDMINI CLICK", args, item, item.item.inventoryId)
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
        itemDetailHover.setFirstItem(Some(grid.getDataItem(row).asInstanceOf[ComputedItem]))
        itemDetailHover.show(
          x = e.clientX.asInstanceOf[js.Number],
          y = e.clientY.asInstanceOf[js.Number],
          compare = true
        )
      }
    })
    grid.onMouseLeave.subscribe((e: js.Dynamic, args: js.Any) => {
      itemDetailHover.hide()
    })
  }


}


