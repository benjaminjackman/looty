package looty
package views

import org.scalajs.jquery.JQuery


//////////////////////////////////////////////////////////////
// Created by bjackman @ 1/1/14 2:46 PM
//////////////////////////////////////////////////////////////


class HomeView(val banner: String, val version: String) extends View {

  def versionHistory = """
# Version History
## 0.2.1.33 (2014-11-30)
* Added upcoming leagues
* Flasks are interpolated

## 0.2.1.32 (2014-09-20)
* Block Chance Column

## 0.2.1.31 (2014-09-19)
* Moar columns

## 0.2.1.30 (2014-09-18)
* Added Skill Gem Keywords Column
* Added +%Phys Column
* Added Explicit Mod Count Column
* Added Crafted Mod Count Column
* Show Crafted (from masters) Mods on Item Cards + Use their stats in columns
* Only show a few columns by default

## 0.2.1.29 (2014-09-12)
* added stash idx to loc

## 0.2.1.28 (2014-09-12)
* Fix for borked netcode logic (thanks to sundrino for pointing it out)

## 0.2.1.27 (2014-09-12)
* Removed ojs / Start using the CGTA/open libraries
* Flat Accuracy increase column - for sundrino

## 0.2.1.26 (2014-09-09)
* Added WealthView

## 0.2.1.25 (2014-09-08)
* Added columns for CookieVortex

## 0.2.1.24 (2014-09-06)
* fixed bug with inventory ids in RefreshPane
* unknown items are just warnings
* fixed bug with unused forumLocationName

 ## 0.2.1.23 (2014-09-06)
* Finally fixed a bug in the RPC layer that was causing tabs to randomly not refresh. Just because js is single threaded doesn't mean it's simple!

## 0.2.1.22 (2014-09-04)
* Fixed bugs that were causing passive skill trees not to load in PoeBuilder.
* Don't complete futures for queueitems. which have already been completed. Fixes a bug where random stash tabs weren't loading.

## 0.2.1.21 (2014-09-03)
* Silly Looty! Mitts aren't Helmets. (Thanks to Sundrino for the bug report)

## 0.2.1.20 (2014-09-03)
* Export Csv
* Added "for Path of Exile" to the name of looty so hopefully it shows up in the chrome store when searching for Path of Exile

## 0.2.1.19 (2014-09-01)
* Refresh character levels

## 0.2.1.18 (2014-08-30)
* Added a Link to the [main forum thread](http://www.pathofexile.com/forum/view-thread/832233) in the alert messages. Please stop by and let me know what you think of Looty!
* Shift-clicking an item will refresh it container from the server. Use this as you find items in looty that you end up using to keep things in sync.

## 0.2.1.17 (2014-08-27)
* Fixed: really this time, refreshing stash tabs was messed up on new installs.

## 0.2.1.16 (2014-08-27)
* Fixed: refreshing stash tabs was messed up on new installs.

## 0.2.1.15 (2014-08-27)
* Significantly improved Y layout location logic for item-detail hover.

## 0.2.1.14 (2014-08-26)
* Fixed: Refresh player data automatically on PoeBuilder view and LootGrids.

## 0.2.1.13 (2014-08-26)
* Fixed: Secondary Item wasn't being hidden.
* Fixed: Upgrade view didn't show deltas when changing between items of the same type (e.g. Ring/Ring2)

## 0.2.1.12 (2014-08-26)
* New: Upgrades pane. Select a character and click on a slot and Looty will show how every item across all your stash tabs compares to the item you have equipped at that slot. This should make finding gear upgrades a snap when leveling!
* Enhancement: Images in item detail hovers
* Enhancement: font-face = Helvetica, Arial, Sans Serif, bask in the glorious the xheight.
* Change: Numeric column width back to 50px to fit more stuff on the screen.
* Enhancement: Added 1H/2H prefix to all weapons types (Except bows) for easier searching

## 0.2.1.11 (2014-08-25)
* Added messages linking to feature page on reddit

## 0.2.1.10 (2014-08-24)
* Rewrote Gem XP Tracker. Try it out and let me know what you guys think!
* Using select2 menus on the datagrids for user defined views (saveable sets of columns / filters)
* Added ACE / vm.js (for custom scores, not yet implemented)
* Added dexerity bonus to accuracy rating column.
* Added socket color of gems into the sockets column.

## 0.2.1.9 (2014-08-23)
* Numeric columns don't require operators (e.g. < <= etc) anymore. Those operators can still be used however they should filter as a min or max automatically. For example typing 50 in the pDps column will only show items with a pDps greater than or equal to 50. while typing it into the rLvl column (RequiredLevel) will show items that require at most level 50.
* Strength and Int Bonuses are now applied to life / mana  (thanks to sundrino for the suggestion)
* Increased cast speed, accuracy and max energy shield all have columns

## 0.2.1.8 (2014-08-22)
* shift click on a character / tab in [tabs] to refresh that character or tab from pathofexile.com
* more descriptive types
* larger column headers / smaller fonts

## 0.2.1.7 (2014-08-22)
* Show empty cells instead of zeros

## 0.2.1.6 (2014-08-22)
* Fixed sizing issue with PoeBuilder Page

## 0.2.1.5 (2014-08-22)
* Add / Remove / Save Columns + Filters
* Add / Remove / Refresh Tabs
* Open a characters build in PoeBuilder (Poe Builder is awesome check it out sometime!)
* rarity column (thanks to sundrino for the suggestion)

## 0.2.1.4 (2014-08-21)
* Fixed bug with Block % not parsing correctly

## 0.2.1.3 (2014-08-21)
* Fixed bug with max level gems causing parse errors
* Upgrade to ScalaJs 0.5.3

## 0.2.1.2 (2014-08-20)
* Fixed google analytics script errors

## 0.2.1.1 (2014-08-20)
* Added a misc column that shows count of items in stack / mapLevel / gemLevel / Total #Sockets  (thanks to hih0, Sirais, and tokyotapes for the suggestions)

## 0.2.1 (2014-08-20)
* Fixed DPS Bug (thanks to SoulProxy for reporting to the issue)

## 0.2.0 (2014-08-19)
* Chrome Web Store Release

The [ScalaJS](http://www.scala-js.org/) based [GPLv2](http://www.gnu.org/licenses/gpl-2.0.html) source code is on [github](https://github.com/benjaminjackman/looty) There is a [README](https://github.com/benjaminjackman/looty/blob/master/README.md), as well as an [issue tracker](https://github.com/benjaminjackman/looty/issues), feel free to post bugs, questions, or feature requests there. I am also have a public [trello board](https://trello.com/b/xr7dx96M/looty) for tracking progress on tasks I am actively working on.

   """


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
        |</div>
        """.stripMargin
    }
    val ta = el.append(s"""<textarea rows="60" cols="120" readonly>$versionHistory</textarea>""")
  }

  def stop() {}
}