package looty
package util

import org.scalajs.jquery.JQuery

object Settings {
  def toggleOption(value:String): String = {
    if (value == "true") "false"
    else "true"
  }

  def insertHtmlElement(variableNameForLocalStorage:String, description:String, appendToHtmlElement: JQuery, outerDivClass:String): Unit = {
    val div = jq(s"<div class='$outerDivClass'></div>")
    val checkbox = {
      if (window.localStorage.getItem(variableNameForLocalStorage) == "true")
        jq(s"<input id='$variableNameForLocalStorage' type='checkbox' checked></input>")
      else
        jq(s"<input id='$variableNameForLocalStorage' type='checkbox'></input>")
    }
    div.append(checkbox)
    div.append(s"<label for='$variableNameForLocalStorage'>$description</label>")
    checkbox.on("click", () => {
      window.localStorage.setItem(variableNameForLocalStorage, toggleOption(window.localStorage.getItem(variableNameForLocalStorage)))
    })
    appendToHtmlElement.append(div)
  }

  val SHOW_TOOLTIP_ON_KEY_PRESS = "SETTINGS_SHOW_TOOLTIP_ON_KEY_PRESS"
  val SHOW_TOOLTIP_ON_KEY_PRESS_DESCR = "Show items tooltip when presses ctrl key"
  val TOOLTIP_TEXT_ALIGN = "SETTINGS_TOOLTIP_TEXT_ALIGN"
  val TOOLTIP_TEXT_ALIGN_DESCR = "Align text in Item Tooltip (Dark Theme) to left side"

  def isSet(option:String): Boolean = {
    window.localStorage.getItem(option) == "true"
  }
  val SHOW_PARSING_PROBLEM = true
}
