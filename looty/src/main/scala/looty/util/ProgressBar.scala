package looty.util
import looty.views.CheckpointFmts.format2

object ProgressBar {

	def insertProgressBarStyling:String = {

			s"""<style type="text/css" rel="stylesheet">
				 |.progress-bar {
				 |  display:block;
				 |}
				 |    .progress-bar progress[value]::-moz-progress-bar {
				 |      appearance: none;
				 |      -webkit-appearance: none;
				 |      background-color: #3fb3ce;
				 |      border: 1px solid #17424d;
				 |      background-size: 35px 20px, 100% 100%, 100% 100%;
				 |      background-image: -moz-linear-gradient( top, rgba(255, 255, 255, 0.25), rgba(37, 181, 160, 0.77) ), -moz-linear-gradient( left, #3c98b7, #1df2f2 );
				 |    }
				 |
				 |    .progress-bar .value {
				 |      position: absolute;
				 |      margin-left: 5px;
				 |      font-size: 0.9em;
				 |      font-weight: 600;
				 |    }
				 |    .progress-bar .percent-to-finish {
				 |        /*try flex between*/
				 |        margin-left: 50px;
				 |        position: absolute;
				 |        font-size: 0.9em;
				 |        font-weight: 600;
				 |    }
				 |</style>""".stripMargin
	}
	def addProgressBar(value:Int, max:Int):String = {
		val remaining:Int = max - value
		val percent:Double = value.toDouble / max
//		s"""<div class='progress-bar'>
//			 |<span class='value'>${remaining}</span>
//			 |<span class='percent-to-finish'>${format2(percent * 100)}</span>
//			 |<progress class='bar' max='${max}' value='${value}'></progress>
//			 |</div>""".stripMargin

		s"""<div class="progress-bar">
			 |  <span class="fill"></span>
			 |  <span class="value">${value}nbsp;/nbsp;${max}</span>
			 |</div>
			 |""".stripMargin
	}
}
