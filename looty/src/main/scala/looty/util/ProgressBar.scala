package looty.util
import looty.views.CheckpointFmts.format2

object ProgressBar {
	def addProgressBar(value:Int, max:Int, style:String, showValue:Boolean): String = {
		val percent: Double = value.toDouble / max
		val text = if (showValue) s"$value / $max" else ""
		s"""<div class="progress-bar ${style}">
			 |  <span class="filling" style="width:${format2(percent * 100)}%"></span>
			 |  <span class="value">${text}</span>
			 |</div>
			 |""".stripMargin
	}
}
