package looty
package views

import org.scalajs.jquery.{JQuery, JQueryStatic}


//////////////////////////////////////////////////////////////
// Created by bjackman @ 1/1/14 2:46 PM
//////////////////////////////////////////////////////////////


class HomeView(val banner: String, val version: String) extends View {
	val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
  def versionHistory = """
# Version History
## 0.2.1.81 (2021-04-25) (Traf contributed this update)

Features
- Added input field to filter mod buttons (above mod list on the left) to help you choose desired ones faster.
(this feature uses something called fuzzy search, it searches all letter occurrences, so if you type "life" it would select also "the type line of an item", it is as good as it gets :) )

Added columns for affixes :
  - #% Increased Attributes
  - #% Increased Dexterity
  - #% Increased Intellect
  - #% Increased Strength
  - #% increased Damage
  - #% increased Area Damage
  - #% increased Melee Damage
  - #% increased Attack Damage
  - #% increased Area of Effects

Turned on score column, as some of you liked it. Although its a bit outdated, i'll try to add there stats from time to time.
All suggestions welcomed!

Added columns for cluster jewels affixes:
   - Adds # Passive Skills
   - # Added Passives is/are Jewel Socket - number of sockets
   - # Added Small Passive (also) grants # - what stats you gain with small passives
   - # Added Passive Skill is # - what skill(s) cluster jewel adds

Added "Damage over Time" mod group, which supports following mods:
  - #% to Cold Damage over Time Multiplier
  - #% to Fire Damage over Time Multiplier
  - #% to Chaos Damage over Time Multiplier
  - #% to Non-Ailment Chaos Damage over Time Multiplier
  - #% to Physical Damage over Time Multiplier
  - #% to Damage over Time Multiplier for Bleeding
  - #% to Damage over Time Multiplier

Gave some love to minion, totem, traps and mines builds:
  - Minions deal #% increased Damage
  - Minions have #% increased Area of Effect
  - Minions have #% increased Attack Speed
  - Minions have #% increased Cast Speed
  - Minions have #% increased maximum Life
  - Minions have #% increased Movement Speed
  - Minions have +#% to all Elemental Resistance
  - Minions have #% chance to deal Double Damage"
  - Minions Accuracy Rating
  - Minions Reduced Reflected Damage
  - Increased Minion Duration
  - #% increased Mine Damage
  - #% increased Mine Throwing Speed
  - #% increased Trap Damage
  - #% increased Trap Throwing Speed
  - #% increased Totem Damage
  - #% increased Totem Life
  - Totems gain +#% to all Elemental Resistances

Changes to gem mods:
  - renamed previous mod group "Gems"  to "Socketed Gems Level"
  - added column for mod "Socketed Gems are Supported by Level x #" - in this column you will get name of that spell
  - added mod groups for "Spell Gems Level" and "Gems Level" so it shows now:
    - # to Level of all # Skill Gem
    - # to Level of all # Spell Skill Gem

Fixes
  - heist items for hirelings, contracts and blueprints are correctly recognized
  - resonators are recognized as separate type
  - crafted mod, showing if item has crafted mod is fixed

## 0.2.1.79 (2021-01-15)
Special thanks, again, to Traf27 for keeping Looty going!

Design
- Added dark theme! to easy strain on your eyes at night - switch is on the right side
- item tooltips in dark theme now closer resemble those on official site/in game
- added Incubators to item tooltips - fancy progressbar with current/total kills and what it's incubating into
- added improvements to XP page and its gem experience tables

Features
- Added option to Settings panel to show tooltip when CTRL key is pressed, solving issue with tooltip obscuring vision.
  note: When pressing ctrl being on some row, you have to reenter this row with mouse pointer to show tooltip - thats best I can do right now
- Added option to Settings panel to align text in tooltip to the left - in dark theme is centered - so you can override it here.

- Added following columns
	- IncubatorReward - what incubator on item is going to drop
	- % Armor local to item
	- % Evasion Rating local to item
	- % Energy Shield local to item
	- % Armor global to character stats - now recognize "% increased Armor" on talismans, rings, belts, jewels
	- % Evasion Rating global to character stats - now recognize "% increased Evasion Rating" on talismans, rings, belts, jewels
	- % chance to Dodge Spell Hits
	- % chance to Block Spells Damage
	- Added columns for checking if items are: Identified, Crafted, Corrupted, Veiled, Synthesised (has fractured modes), Mirrored to new group Miscellaneous, moved also influences there which shows list of influences on item
	note: Enchanted items has own columns enchc (enchants count) and ench (enchants list)

- Bug fixes
	- flasks display now their real values instead of "{0}" and "{1}"
	- enchants are not duplicated anymore in column "unparsed"
	- changed behavior of Evasion Rating and Armor increased mods, added their local variations, and added local Energy Shield increase
	- armor and evasion rating are correctly calculated and now are global - it recognize "% increased Armor" and "% increased Evasion Rating" on talismans, rings, belts, jewels
	- items with dexterity include "global Evasion Rating" column (as every 5 dexterity increases Evasion Rating by 1 %)

## 0.2.1.78 (2020-09-17)
- Added types
	- "Organs" (from Metamorph league)
	- Timeless Jewel
- Added columns for affixes like :
	- "Regenerate (amount) Life/Mana per Second"
	- "Regenerate (amount)% of Life/Mana per Second"
	- "Grants LeveL (skillLevel) (skillName) Skill" - skillLevel
	- "Grants LeveL (skillLevel) (skillName) Skill" - skillName
	- added +% maximum life affix
	- influences (elder, shaper, crusader, redeemer, hunter, warlord)
	- enchantments for gloves, boots, helmets from Labirynth,
	  rings and amulets (from Cassia - Blight league), cluster jewels (Delirium)
- Added properties (mostly used by jewels)
	- "Limited to"
	- "Radius"
- You can now see names and quantity for enchantments
	- for gloves, boots, helmets from Labirynth
	- rings and amulets (from Cassia - Blight league)
	- cluster jewels, "Adds x Passive Skills", "Added Small Passive Skills grant: xxx" (Delirium)
- Added column mod "unparsed"
	It gathers mods without its own proper column, it looks like "a| b| c| ..."
	You can search them via matching text.
	For example: when want to find all "zombie" items you have,
	type "zombies" into "unparsed" column field and it should show all items, with word "zombie"
	in affixes. I don't have any other solution for now. :)

- UI background readability improvements on Home, Xp, Wealth, Maps, Settings pages
  - table columns can be resized again
  - switched off Maps and Poebuilder subpages
	- adjusted mod button position
  - increased font size from 14px to 16px
	- changed color of disabled column to light grey

## 0.2.1.77 (2019-12-03)
Special thanks to Traf27 for contributing several fixes that keep looty going!
- Chrome extension works again, hurray
- Silence some console warnings with localStorage.setItem("SQUELCH_WARNINGS", "true") inside the console

## 0.2.1.76 (2019-10-30)
firefox review placation

## 0.2.1.75 (2019-05-01)
Jewel Support

## 0.2.1.74 (2019-04-26)
Realm can be set under settings, set it to sony in order for looty to
work with the ps4 version of PoE, other realms may work as well.

## 0.2.1.73 (2019-04-20)
The Computer Speaking Gibberish, in Llama Mode had to be removed to placate Firefox Add-on Validation.
jQuery upgraded to version produced this decade, again at the behest of Firefox Add-on Validation.
Looty now available in Firefox.

## 0.2.1.72 (2019-04-20)
Holy Saturday, I must be high, Looty Lives! It's a miracle!
Updating Affixes

## 0.2.1.71 (2018-03-15)
Remove google analytics code

## 0.2.1.70 (2017-12-12)
Thanks to PetePete1984 for updating Looty to work with the
latest changes to the APIs from the abyssal leagues.

## 0.2.1.69 (2017-08-19)
# adding more parsers

## 0.2.1.68 (2017-08-05)
# 20% Less ornery commit message

## 0.2.1.67 (2017-08-05)
# fix for GGG change of API

## 0.2.1.66 (2017-04-18)A
  Thanks to PetePete1984 for uploading several fixes and patches to enhance looty
  as well as getting to compile on windows!
  @PetePete1984 Moves windows build script to bin folder      49f56c6
  @PetePete1984 Enables parsing Full Dragonscale Armour  …      7636cf3
  @PetePete1984 Improves handling for map fragments  …      267b11d
  @PetePete1984 Adds a unique custom2 column for the new scoring system

## 0.2.1.65 (2016-12-06)
# Quote commas in csv

## 0.2.1.64 (2016-05-27)
# Fix for affix

## 0.2.1.63 (2016-05-27)
# Use poe website passive tree instead of poebuilder

## 0.2.1.61 (2016-03-19)
#  Accepted PR from PetePete1984 that fixes upgrade panes to work with Ascendancy Classes

## 0.2.1.61 (2016-03-19)
# Fixed some affixes

## 0.2.1.60 (2016-02-27)
# Added item level

## 0.2.1.58 (2015-11-21)
# Attempting to dynamically add leagues ... try again ... again

## 0.2.1.57 (2015-10-05)
# Attempting to dynamically add leagues ... try again

## 0.2.1.56 (2015-10-05)
# Attempting to dynamically add leagues

## 0.2.1.55 (2015-08-20)
# Bug fix for issues from from RNJoy's video (-mana cost of skills / life leech don't sort/filter properly)

## 0.2.1.54 (2015-08-20)
# <<M:Thanks>><<S:A Lot>><<MS:GGG>>Fix for GGG breaking all community tools without notice.

## 0.2.1.53 (2015-07-11)
# Added Basic Jewel Support

## 0.2.1.52 (2015-07-10)
# Fixed parsers to work with POE 2.0 Affix strings

## 0.2.1.51 (2015-07-10)
# Added Support for Tempest / Warbands Leagues

## 0.2.1.50 (2015-06-28)
# Fix for changed ajax api

## 0.2.1.49 (2015-05-08)
# Added flashback league support

## 0.2.1.48 (2015-04-28)
# Trying to get account name to work for all users

## 0.2.1.47 (2015-04-24)
# Added account name to get-character skill tree call

## 0.2.1.46 (2015-04-21)
# Added account name to get-character inventories call since it is required there now

## 0.2.1.45 (2015-04-06)
# Added temp leagues

## 0.2.1.44 (2015-02-10)
# Added type line for finding items by their base types (Jalish)

## 0.2.1.43 (2015-02-01)
# Added eDps (thanks 1BLOOBERRY)
# Added Dire Cloak, Dire Jack, Pain Veil types (thanks 1BLOOBERRY)

## 0.2.1.42 (2014-12-15)
* Fixed stash tab buttons not turning red during reloads
* Tweaks to map view

## 0.2.1.41 (2014-12-12)
* Updated description

## 0.2.1.40 (2014-12-12)
* Patch 1.3.0 Parsing updates

## 0.2.1.39 (2014-12-11)
* fabric
* poebuilder pop out

## 0.2.1.38 (2014-12-10)
* styling

## 0.2.1.37 (2014-12-10)
* Fixed Bug, Less/CSS files not copied to deploy

## 0.2.1.36 (2014-12-10)
* Material Design
* Added Coinbase tip
* Split strings on | instead of ' '

## 0.2.1.35 (2014-12-09)
* Fixed properties in tooltips that got broke by flask interpolation

## 0.2.1.34 (2014-12-09)
* Added Increased Elemental Damage With Weapons (thanks jalish/toup/sundrino!)
* Added css classes for controls

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


  def start(ele: JQuery) {
    var el = ele.append("<div id='home'></div>")
    el = jq("#home")
    el.html {
      """<div id="welcome">""" +
        s"""<h1>$banner</h1>""" +
        """<h2><img src="images/coin16.png">Welcome to <span id="gold-looty">Looty!</span><img src="images/coin16.png">""" +
        s"""</h2>Version: ($version)<p>""" +
        """Looty was created to make it easier to search inventories in Path of Exile.<br>
        |It provides a grid interface to search for items in different leagues.<br>
        |The XP view will attempt to predict when a gem will level up.<br>
        |GGG seems to only <strong>refresh items</strong> and gem information when a <strong>character changes zones</strong>,
        |so keep that in mind if things aren't showing up.<br>
        |Source code available on <a href="https://github.com/benjaminjackman/looty">github</a>.<br>
        |<h3><a href="https://youtu.be/vcbU84R8nso?t=146" target="_blank">Watch an overview video by AngryRoleplayer </a></h3>
        |<h4> Tips & Tricks & Miscellaneous Details </h4>
        |<ul>
        |<li>You can type things to search for into the empty row at the top of the grids.
        |<ul>
        |<li>Try starting the search with &gt; or &lt; or =</li>
        |<li>The search is not case sensitive.</li>
        |<li>If the first term isn't an operator, then it defaults to regular expression search.</li>
        |<li>| between words are treated as an 'OR', use this to search for several different types at once, for example: gloves|helmet|boots</li>
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
    el.append(s"""<textarea rows="60" cols="120" readonly>$versionHistory</textarea>""")
    jq("#gold-looty", el).on("click", () => console.log("Clickity"))
  }

  def stop() {}
}
