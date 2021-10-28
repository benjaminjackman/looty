Looty
=====
A browser extension for Path of Exile that makes inventory searching fun!

[Chrome Web Store](https://chrome.google.com/webstore/detail/looty/ajfbflclpnpbjkfibijekgcombcgehbi?hl=en&gl=US)

Built using [ScalaJs](http://www.scala-js.org/) based on [GPLv2](http://www.gnu.org/licenses/gpl-2.0.html)

### How to build for firefox reviewers:
#### Prequisites
1. Have nvs (https://github.com/jasongin/nvs) installed for node (This version of ScalaJS needs node version 8 installed)
2. Have java8 installed (This version of Scala doesn't support later jvms)

run bin/deploy

build/build.zip will have the packaged file

## Statement of Inspiration

Quoted from Steve Yegge's [Excellent Blog Post](http://steve-yegge.blogspot.com/2012/10/the-borderlands-2-gun-discarders-club.html) About Borderlands 2, which is another loot game
>Here's the thing, though. It's not just about capacity. If Gearbox wants to do this Right, by which I mean pull their heads out and do something that nobody in the game industry has ever done before, what they really need to do is give players a database.
>
>That's what we want, really. You make 87 bazillion guns, and let us collect them? Well then we're going to want hundreds and hundreds, maybe thousands of guns in our collections. Not twenty, or whatever stupidly low number you've given us. That just spawns modding and mule characters and leaving the game altogether -- any outlet from the collection pressure; players will use them all.
>
>What BL1 needed was a way for you to effectively manage a collection of a thousand guns. What if you want to look at all your Mashers? Or all your weapons by type, or by elemental damage, or by manufacturer? I'm not asking for a data warehouse here, or for some fancy text-based console-query UI. I mean, -I- would use it, but obviously we want to keep this mainstream.
>
>If you start by formulating the basic problem as: "How do I manage a collection of a thousand guns," then your UX guys should be able to come up with something acceptable. No — you know what? Fuck acceptable. They should be able to come up with something awesome, something in keeping with the innovation and forward-looking badassery that we've all come to associate with Gearbox and Borderlands.

##
#### If you would like to improve Looty, here are [**Development Instructions**](#development-instructions)  
##
#### Feel free to post bugs, questions, or feature requests [here](https://github.com/benjaminjackman/looty/issues).
##
#### PathofExile forum [post](http://www.pathofexile.com/forum/view-thread/832233)
##

## Developer Log
```code
# Version History
## 0.2.1.83 (2021-10-27)
Features
  - added Scourge items
    - new column scourged - to quickly check which items are scourged (works same as corrupted etc.)
    - updated item tooltip with scourge affixes and Tier info
  - added changes to flasks
    - new column in Flask Action: faHinderMaim for flasks giving immunity to Hinder and Maim
    - new column in Flask Action: fapois for flasks giving immunity to poison
    - new column in Flask Mods: fimmunetime  to check how long immunity will last when you use flask - works with magic flasks
  - added new base armor types from 3.15
  - added operator ! for filtering column rows. You can now exclude some string of letters/numbers. 
  It should be only entry in filter box  
  example: you are looking for ring, but you would like to see all rings except breach ones, type in "!breach" in column "tpeln" 
  example: you are looking for all not crafted items, type in "!1" in column "crafted"
  
## 0.2.1.82 (2021-07-12)
Features
  - added Recover # of Energy Shield on Kill
  - added Recover # Life on Kill
  - added Recover # Mana on Kill
  - added # increased maximum Mana
  - value of affix "#% increased Attack and Cast speed" is now added to mods "attack speed" and "cast speed"
  - flasks removing bleeding has new modifier, old one is still used on previous ones
  - re enabled 2 custom score mods per user request
  
Fixes
   - duplicate requests problem solved -> faster item data download

Dev
  - added to readme various useful dev docs
  - added boolean variable to turn off console parsing messages (by default they are shown, as before)

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
```

<details><summary>Even more history</summary>
<p>

```code

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

## 0.2.1.77 (2019-11-18)
Special thanks to Traf27 for contributing several fixes that keep looty going!
Chrome extension works again, hurray
Silence some console warnings with localStorage.setItem("SQUELCH_WARNINGS", "true") inside the console

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

## 0.1.2 (2014-03-13)
* [DEMO] Working on abstracting on chrome specific parts and made a demo page http://blog.jackman.biz/looty/demo/looty.html#/home

## (2014-03-12)
* [DOCS] Worked on updating documentation, probably should have done that before the alpha post

## (2014-03-11)
* [RELEASE] Released Alpha 0.1.1 and published link to it on reddit.
```
</p>
</details>

 

##
#### Public [trello board](https://trello.com/b/xr7dx96M/looty) for tracking progress on tasks I am actively working on.



## Todo
<details><summary>Authors original todo's</summary>
<p>

### Newer todos:
- Card Views
  - allows seeing gems / uniques etc as items in a 2d grid of cells
    - each cell is like a card
  - beefs up the map view
    - though replace the map view with an atlas view

### For pure love of the loot
- [ ] Collectors view for Uniques (grayed out pictures for Uniques not obtained)
- [ ] Trophy room that allows for displaying epic items. With categories (Best DPS Item, Highest Score By Slot)

### Loot Management
- [x] Odd / even row colors (fph)
- [x] Allow users to save filter sets
- [x] Load StashTab on click
- [x] Add / Remove Columns (prioritized for fph)
- [x] Require ctrl to show tooltips (fph suggestion)
- [ ] Custom and better default item scoring options [reddit post](http://www.reddit.com/r/pathofexile/comments/1q5rdi/its_worth_keeping_if/)
- [ ] Show reason for score in the item detail.
- [ ] Ability to click on a row and label the item in that row
- [ ] Column for recipes for an item (chromatics mostly)
- [ ] Recipes view
- [ ] Custom Calculated Columns
- [ ] Multi-Select Rows with Ctrl (useful for other features)
- [ ] Label items with colors (how can this persist across item moves?)
- [ ] Create an inventory view that shows item by color for help organizing / garbage collecting items
- [ ] Recipes (Chaos for set etc, not sure if GGG frowns on this or not)
- [ ] Give the players a playing mode (via the leveling screen) and let them mark certain stash tabs as auto-refresh then auto-watch those tabs and make sounds when an item is looted and identified that passes certain filters.
- [ ] Custom Filter sets (can be tied to store pages)
- [ ] Decode an item's affixes and show how it matches up to best ones available in the item detail display
- [ ] Show how good an item is compared to the best in slot for the level compared to other items the player has

### Extensibility and compatability with other sites
- [ ] Act as a secure API that can get data up to other sites and act as a Pseudo API until GGG makes one (if they do, *cough* item level *ahem* item uuids *ATAZIRIQUADSWTFCHOO* last mod time get-stash-items/{tabs:1} *hack*)
- [x] Provide CSV / Google Document export of items table
- [ ] Upload builds / equipment to the http://poebuilds.com
- [ ] Get stats for current character's build from http://poebuilds.com and use it to calculate actual dps and so on for a character with an item and for a skill

### Trading help
- [ ] Templating to automatically create shop posts, via custom filters.
- [ ] Search for similar items on http://poe.xy.is [reddit post](http://www.reddit.com/r/pathofexile/comments/1vodwm/faster_trading_with_poexyz/ceu9n5m)
- [ ] User online tracking that can be sent to third party sites, to indicate that the user is able to trade
- [ ] Integrate with instant messaging platforms / chat rooms and provide those hooks up to trading sites (web-rtc?) to allow users to trade with each other

### Improved Program Logic
- [ ] Smart detection of moved items
- [ ] User can mark an item as moved and inventory as dirty
- [ ] Handle when stash tabs are re-ordered
- [ ] Allow users to upload items whose affixes failed to parse
- [ ] Or maybe make affix parsers configurable
- [ ] Better refresh logic, remove only stash tabs might be left behind after a refresh

### User Help
- [x] Messaging Area To Help players understand what is going on as it loads
- [ ] Turn guide in this format, progress meter at top is neat [gitbookio](http://web.archive.org/web/20140404205153/http://gitbookio.github.io/javascript/README.html)
- [ ] Simplify Demo Home Page to be a lot more like http://haste-lang.org/
- [ ] Tutorial video on searches operators within the boxes
- [ ] Add feedback / suggestion options inside of the extension itself
</p>
</details>

## Development instructions
#### Offline development
**You can switch data source for Looty**  
https://github.com/benjaminjackman/looty/blob/master/looty/src/main/scala/looty/LootyMain.scala#L40  

With class PoeCacherDemo you have ability to load data from .json file when you place it in build directory /data/ 
To check it out just switch it in place of    
```
 implicit val pc: PoeCacher = {
    if (extensionMode) {
      // load data from /data/sample-items.json instead of GGG servers
      //new PoeCacherJSON()
      // fetch data from GGG API
      new PoeCacherChrome()
    } else {
      new PoeCacherExileTools()
    }
  }
```  
Now you are free to use whatever item data you wish, and test it to your heart content without worrying for download API limits.

If you would like to prepare your own sample-item.json file. Here's [how-to](./HowTo-sample-items-file.md).

#### Useful links:

Dev docs
- [Official Path of Exile Dev Docs](https://www.pathofexile.com/developer/docs)
- [Chuanhsing's PoE complete API documentation with missing endpoins in PoE official dev docs](https://poedb.tw/us/poe-api)
- [RePoe](https://github.com/brather1ng/RePoE) brather1ng repository of Path of Exile resources. Contains the generated data from GGPK file in JSON format
- [Important changes in PoE for developers - official forum where Novynn post threads with changes for current temporary league](https://www.pathofexile.com/forum/view-forum/674)

Tools
- [Firefox extension documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
- [Scala documentation](https://docs.scala-lang.org/)
- [Scala 2.12 Library](https://devdocs.io/scala~2.12_library/) parsed doc from previous site Library API but easier to search
- [Itellij IDEA](https://www.jetbrains.com/idea/) Java IDE with native Scala support

### How to build for iterative development
#### Prequisites

1. Have nvs (https://github.com/jasongin/nvs) installed for node (This version of ScalaJS needs node version 8 installed)
2. Have java8 installed (https://github.com/frekele/oracle-java/releases) (This version of Scala doesn't support later jvms)
3. Have SBT (Simple Build Tool) for compiling Scala into js. This is already __included__ in looty project (sbt-launch-0.13.0.jar).
And is run via sbt or sbt-win.cmd commands.

in the project root at command line:  
#### Linux:

    bin/sbt
#### Windows:

	bin\sbt-win.cmd
    
Build a development version with:  

    fastOptJS
    
To generate .js on the fly, while you save any changes in code use:

	~fastOptJS


A javascript fill will be built at:  

    looty/target/web/public/main/looty-fastopt.js

This folder has the manifest and can be used with firefox for debugging:  

    looty/target/web/public/main/

Load it in firefox with `about:debugging` use looty-dev.html

### How to build for firefox reviewers and release:

Note: Firefox Add-on's come in form of .ixr files. Which are simply zip files with different extension. 

Bump version number in:
    
    ./looty/src/main/public/manifest.json
    ./looty/src/main/scala/looty/views/HomeView.scala
    
 ### Linux:
 
    bin/deploy

`/build/build.zip` will have the packaged file  
`/build/buildffsrc.zip` will have firefox release package file

#### Windows:

    bin\sbt-win.cmd
    
in sbt, optional 

    clean
and    
    
    compile
    fullOptJS    

Because windows does not come with default zip command line tool, which could automate this part, we have to zip files ourselves. :crying_cat_face:  
Zip following files and directories into choose-some-name.zip 
(for installation in ff change extension to irx)
    
    jslib/
    images/
    less/
    looty.html
    popup.html
    looty-opt.js
    manifest.json
    
Additionaly for release version:    
    
    looty/
    project/
    bin/
    README.md



