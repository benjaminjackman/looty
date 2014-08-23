package looty
package views

import org.scalajs.jquery.JQuery


//////////////////////////////////////////////////////////////
// Created by bjackman @ 1/1/14 2:46 PM
//////////////////////////////////////////////////////////////


class HomeView(val banner : String, val version : String) extends View {
  def start(el: JQuery) {
    el.html {
      """<div class="home">""" +
      s"""<h1 style="color:red">$banner</h1>""" +
      """<h2><img src="images/coin16.png">Welcome to <span style="color:gold">Looty!</span><img src="images/coin16.png">""" +
      s"""</h2>Version: ($version)<p>""" +
      """<span style="color:gold">Looty</span> was created to make it easier to search inventories in Path of Exile.<br>
      |It provides a grid interface to search for items in different leagues.<br>
      |The XP view will attempt to predict when a gem will level up.<br>
      |GGG seems to only refresh items and gem information when a character changes zones,
      |so keep that in mind if things aren't showing up.<br>
      |source code available on <a href="https://github.com/benjaminjackman/looty">github</a>.<br>
      |<h3>Help and more info available <a href="http://blog.jackman.biz/looty">here</a> (eventually)</h3>
      |<h4> Tips & Tricks & Miscellaneous Details </h4>
      |<ul>
      |<li>You can type things to search for into the empty row at the top of the grids.
      |<ul>
      |<li>Try starting the search with &gt; or &lt; or =</li>
      |<li>The search is not case sensitive.</li>
      |<li>If the first term isn't an operator, then it defaults to regular expression search.</li>
      |<li>Spaces between words are treated as an 'OR', so only one word has to match to return a result.</li>
      |<li>If you need to search for a space just use a \s instead.</li>
      |<li>For example brass maul, will match 'brass maul' and 'spiny maul' and 'brass monkey'</li>
      |<li>Whereas brass\smaul will match only 'brass maul'.</li>
      |</ul>
      |</li>
      |<li>You can type into multiple columns to filter down to what you want, for example to find boots with a red
      |socket that can be worn by characters under level 35, enter <i>boots</i> in the <b>type</b> column
      |and <i>r</i> in the <b>sockets</b> column and <i>&lt;35</i> in the <b>rlvl</b> column.
      |</li>
      |<li>Click the column titles to sort by them, shift clicking allows multi-sorting</li>
      |<li>Click on a character / stash tab button to update that stash tab from the server, and to show only it's contents.</li>
      |<li>Use the clear and reload everything button when you need to update several stash tabs, or you re-ordered them</li>
      |<li>Sockets in the socket column are displayed first by largest group, then in alphabetical order. That means G-G-R-R won't ever be listed as G-R-G-R or other permutations.</li>
      |<li>Entering .-.-.-. in the sockets column will match all four link+ socketed items</li>
      |<li>Entering B-B-G-R in the sockets column will match all four link+ socketed items, that have 2 blues linked with a green and red. </li>
      |<li>The UI is dark so that you can leave it up on a second monitor while you play.</li>
      |<li>The score field was roughly based on <a href="http://www.reddit.com/r/pathofexile/comments/1q5rdi/its_worth_keeping_if/">this</a> reddit post</li>
      |<li>Looty was written in <a href="http://www.scala-js.org/">ScalaJs</a></li>
      |</ul>
      |<br>
      |<br>
      |<div>
      |<h3> Version History</h3><br>
      |<h4>0.2.1.7</h4>
      | Show empty cells instead of zeros <br>
      |<h4>0.2.1.6</h4>
      | Fixed sizing issue with PoeBuilder Page <br>
      |<h4>0.2.1.5</h4>
      | Add / Remove / Save Columns + Filters  <br>
      | Add / Remove / Refresh Tabs  <br>
      | PoeBuilder Integration  <br>
      |<h4>0.2.1.4</h4>
      | Fixed bug with Block % not parsing correctly <br>
      |<h4>0.2.1.3</h4>
      | Fixed bug with max level gems causing parse errors <br>
      | Upgrade to ScalaJs 0.5.3 <br>
      |<h4>0.2.1.2</h4>
      | Fixed google analytics script errors <br>
      |<h4>0.2.1.1</h4>
      |<ul>
      |<li>
      |Added a misc column that will show: <br>
      | count of items in stack / mapLevel / gemLevel / Total #Sockets <br>
      | <a href="http://www.reddit.com/r/pathofexile/comments/2e22kc/tools_looty_020_now_available_in_the_chrome_web/cjvnq3h">hih0</a><br>
      | <a href="http://www.reddit.com/r/pathofexile/comments/2e22kc/tools_looty_020_now_available_in_the_chrome_web/cjvfh33">Sirais</a><br>
      | <a href="http://www.reddit.com/r/pathofexile/comments/2e22kc/tools_looty_020_now_available_in_the_chrome_web/cjvo798">tokyotapes</a><br>
      |</li>
      |</ul>
      |<h4>0.2.1</h4>
      |<ul>
      |<li>
      |Fixed DPS Bug <a href="http://www.reddit.com/r/pathofexile/comments/2e22kc/tools_looty_020_now_available_in_the_chrome_web/cjveud4">SoulProxy</a><br>
      |</li>
      |</ul>
      |</div>
      |</div>
      """.stripMargin
    }
  }

  def stop() {}
}