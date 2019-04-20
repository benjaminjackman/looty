Looty
=====
A Google Chrome extension for Path of Exile that makes inventory searching fun!

Available in the [Chrome Web Store](https://chrome.google.com/webstore/detail/looty/ajfbflclpnpbjkfibijekgcombcgehbi?hl=en&gl=US)

Built using [ScalaJs](http://www.scala-js.org/)

## Development instructions

### How to build for firefox reviewers:
#### Prequisites
1. Have nvs (https://github.com/jasongin/nvs) installed for node (This version of ScalaJS needs node version 8 installed)
2. Have java8 installed (This version of Scala doesn't support later jvms)

run bin/deploy

build/build.zip will have the packaged file

### How to build for iterative development

in the project root at command line:  
    bin/sbt
    
build a development version with:  
    fastOptJS

A javascript fill will be built at:  
looty/target/web/public/main/looty-fastopt.js

This folder has the manifest and can be used with firefox for debugging:
looty/target/web/public/

Load it with about:debugging


 


##Statement of Inspiration
Quoted from Steve Yegge's [Excellent Blog Post](http://steve-yegge.blogspot.com/2012/10/the-borderlands-2-gun-discarders-club.html) About Borderlands 2, which is another loot game
>Here's the thing, though. It's not just about capacity. If Gearbox wants to do this Right, by which I mean pull their heads out and do something that nobody in the game industry has ever done before, what they really need to do is give players a database.
>
>That's what we want, really. You make 87 bazillion guns, and let us collect them? Well then we're going to want hundreds and hundreds, maybe thousands of guns in our collections. Not twenty, or whatever stupidly low number you've given us. That just spawns modding and mule characters and leaving the game altogether -- any outlet from the collection pressure; players will use them all.
>
>What BL1 needed was a way for you to effectively manage a collection of a thousand guns. What if you want to look at all your Mashers? Or all your weapons by type, or by elemental damage, or by manufacturer? I'm not asking for a data warehouse here, or for some fancy text-based console-query UI. I mean, -I- would use it, but obviously we want to keep this mainstream.
>
>If you start by formulating the basic problem as: "How do I manage a collection of a thousand guns," then your UX guys should be able to come up with something acceptable. No — you know what? Fuck acceptable. They should be able to come up with something awesome, something in keeping with the innovation and forward-looking badassery that we've all come to associate with Gearbox and Borderlands.

## Developer Log
2014.03.13  -- [DEMO]    [v0.1.2] Working on abstracting on chrome specific parts and made a [demo page](http://blog.jackman.biz/looty/demo/looty.html#/home).
2014.03.12  -- [DOCS]     Worked on updating documentation, probably should have done that before the alpha post
2014.03.11  -- [RELEASE] Released Alpha 0.1.1 and published link to it on reddit.

##Todo

### For pure love of the loot
- [ ] Collectors view for Uniques (grayed out pictures for Uniques not obtained)
- [ ] Trophy room that allows for displaying epic items. With categories (Best DPS Item, Highest Score By Slot)


### Loot Management
- [ ] Require ctrl to show tooltips (fph suggestion)
- [ ] Add / Remove Columns (prioritized for fph)
- [x] Odd / even row colors (fph)
- [ ] Custom and better default item scoring options [reddit post](http://www.reddit.com/r/pathofexile/comments/1q5rdi/its_worth_keeping_if/)
- [ ] Show reason for score in the item detail.
- [x] Load StashTab on click
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
- [ ] Allow users to save filter sets

### Extensibility and compatability with other sites
- [ ] Act as a secure API that can get data up to other sites and act as a Pseudo API until GGG makes one (if they do, *cough* item level *ahem* item uuids *ATAZIRIQUADSWTFCHOO* last mod time get-stash-items/{tabs:1} *hack*)
- [ ] Provide CSV / Google Document export of items table
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
- [ ] Turn guide in this format, progress meter at top is neat http://gitbookio.github.io/javascript/README.html
- [ ] Simplify Demo Home Page to be a lot more like http://haste-lang.org/
- [x] Messaging Area To Help players understand what is going on as it loads
- [ ] Tutorial video on searches operators within the boxes
- [ ] Add feedback / suggestion options inside of the extension itself

