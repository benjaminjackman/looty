package cgta.ojs
package examples

import scala.scalajs.js


object GraphCfgExample {

  //Additional js types
  object jsx {
    trait LowUnion {
      implicit def typeAToUnionLow[A](a: A) = a.asInstanceOf[Union[Nothing, A]]
    }
    object Union extends LowUnion {
      implicit def typeAToUnion[A](a: A) = a.asInstanceOf[Union[A, Nothing]]
      //      implicit def typeAToUnion[A](a : A) = new Union[Nothing, A]
    }
    class Union[+A, +B] extends js.Object


    object Optional {
      implicit class OptionalExtensions[A](val a: Optional[A]) extends AnyVal {
        def isNull = a == null
        def isUndefined = a.isInstanceOf[js.Undefined]
        def isEmpty = isNull || isUndefined
        def isNonEmpty = !isEmpty
        def get: A = if (isNonEmpty) a.asInstanceOf[A] else sys.error(s"get called on nullable when A is not defined")
        def toOption: Option[A] = if (isNonEmpty) Some(get) else None
      }
      implicit def AToOptional[A](a: A) = a.asInstanceOf[Optional[A]]
    }

    trait Optional[+A] extends js.Object

    object implicits {
      implicit def Tuple2ToJs[A, B](t: (A, B)) = js.Array(t._1, t._2).asInstanceOf[Tuple2[A, B]]
    }

    class Tuple2[+A, +B] extends js.Object

    val undefined = global.undefined
  }

  import jsx.implicits._

  type |[+A, +B] = jsx.Union[A, B]

  type ?[+A] = jsx.Optional[A]


  class ShowableCfg extends js.Object {
    var show: js.Boolean = ???
  }

  class SeriesCfg extends js.Object {
    var lines : ?[ShowableCfg] = ???
    var points: ?[ShowableCfg] = ???
  }

  class AxisCfg extends js.Object {
    var ticks: js.Array[js.Number | jsx.Tuple2[js.Number, js.String]] | js.Number = ???

    var min: ?[js.Number] = ???
    var max: ?[js.Number] = ???

    var tickDecimals: ?[js.Number] = ???
  }

  class ColorsCfg extends js.Object {
    var colors: js.Array[String] = ???
  }

  class BorderCfg extends js.Object {
    var top   : ?[js.Number] = ???
    var right : ?[js.Number] = ???
    var bottom: ?[js.Number] = ???
    var left  : ?[js.Number] = ???
  }

  class GridCfg extends js.Object {
    var backgroundColor: ColorsCfg = ???
    var borderWidth    : BorderCfg = ???
  }

  class GraphCfg extends js.Object {
    var series: ?[SeriesCfg] = ???
    var xaxis : ?[AxisCfg]   = ???
    var yaxis : ?[AxisCfg]   = ???
    var grid  : ?[GridCfg]   = ???
  }

  def tryIt() {
    //Constructing this is pretty verbose,
    //Dart has a .. operator that makes this easier
    //Something needs to be done to make this much easier
    val cfg = js.Object().asInstanceOf[GraphCfg]
    cfg.series = js.Object().asInstanceOf[SeriesCfg]
    cfg.series.get.lines = js.Object().asInstanceOf[ShowableCfg]
    cfg.series.get.lines.get.show = true
    cfg.series.get.points = js.Object().asInstanceOf[ShowableCfg]
    cfg.series.get.points.get.show = true
    cfg.xaxis = js.Object().asInstanceOf[AxisCfg]
    //This is a disaster of types! need to figure out how to simplify this!
    cfg.xaxis.get.ticks = js.Array[js.Number | jsx.Tuple2[js.Number, js.String]](
      0: js.Number,
      (Math.PI / 2: js.Number, "\u03c0/2": js.String): jsx.Tuple2[js.Number, js.String],
      (Math.PI: js.Number, "\u03c0": js.String): jsx.Tuple2[js.Number, js.String],
      (Math.PI * 3 / 2: js.Number, "3\u03c0/2": js.String): jsx.Tuple2[js.Number, js.String],
      (Math.PI * 2: js.Number, "2\u03c0": js.String): jsx.Tuple2[js.Number, js.String])
    console.log(JSON.stringify(cfg, jsx.undefined, 2))
    //Prints
//    {
//      "series": {
//        "lines": {
//          "show": true
//        },
//        "points": {
//          "show": true
//        }
//      },
//      "xaxis": {
//        "ticks": [
//          0,
//          [
//            1.5707963267948966,
//            "π/2"
//          ],
//          [
//            3.141592653589793,
//            "π"
//          ],
//          [
//            4.71238898038469,
//            "3π/2"
//          ],
//          [
//            6.283185307179586,
//            "2π"
//          ]
//        ]
//      }
//    }
  }


}
