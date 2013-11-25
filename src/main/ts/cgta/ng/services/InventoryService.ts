//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 11/20/13 1:58 AM
//////////////////////////////////////////////////////////////

module Cgta {
  export module Services {
    var mod = angular.module("services.InventoryService", [])
    var RETRY_IN_MS = 20000;

    function isThrottleReject(reject:any):boolean {
      return reject != null &&
        reject.reason != null &&
        _.isString(reject.reason.message) &&
        reject.reason.message.match(/too frequently/) != null
    }

    export class ImplicitMod {
      static parse(name:string, value:string):ImplicitMod {
        var r = new ImplicitMod
        r.name = name
        r.value = value
        return r
      }

      name:string
      value:string
    }

    export class BaseItem {
      name:string
      ar:number
      ev:number
      es:number
      level:number
      implicitMods:Array<ImplicitMod>
      dex:number
      str:number
      int:number
      cat1:string
      cat2:string


      static parse(json:any, cat1:string, cat2:string):BaseItem {
        var x = new BaseItem()
        x.cat1 = cat1
        x.cat2 = cat2

        x.name = json["Name"]
        x.ar = +json["Armour"]
        x.ev = +json["Evasion Rating"]
        x.es = +json["Energy Shield"]
        x.level = +json["Level"]
        x.dex = +json["Req Dex"]
        x.int = +json["Req Int"]
        x.str = +json["Req Str"]

        var imods = json["Implicit Mods"]
        var imodValues = json["Mod Values"]
        x.implicitMods = []
        if (imods != null && imods !== "") {
          var ns = imods.split(" : ")
          var vs = (imodValues || "").split(" : ")
          for (var i = 0; i < ns.length; i++) {
            x.implicitMods.push(ImplicitMod.parse(ns[i], vs[i]))
          }
        }

        return x
      }
    }

//    "Armour": "0",
//    "Energy Shield": "105",
//    "Evasion Rating": "251",
//    "Implicit Mods": "From Armour Movement Speed +% : Base Maximum Mana",
//    "Level": "71",
//    "Mod Values": "-4 : 20 to 25",
//    "Name": "Carnal Armour",
//    "Req Dex": "88",
//    "Req Int": "122",
//    "Req Str": "0"


    export class BaseItemService {
      baseItems:any = {};

      constructor() {
        var self = this
        var bis = (<any> window).BaseItems;

        ["Armour", "Jewelry", "Weapon"].forEach(
          function (cat1:string) {
            _.each(bis[cat1], function (items:any, cat2:string) {
              _.each(items, function (item:any) {
                var bi = BaseItem.parse(item, cat1, cat2)
                self.baseItems[bi.name] = bi
              })
            })
          }
        )
      }

      get(item: AnyItem):BaseItem {
        //Magic items aren't going to work here.
        return this.baseItems[item.typeLine] || null
      }

    }

    /**
     * Wraps rpc calls to the ggg servers.
     */
    export class PoeRpcService {

      constructor(private $http:ng.IHttpService) {
      }

      private getItems<T>(url:string, params:any):Q.Promise<T> {
        var deferred = Q.defer()
        var args = {
          method: "POST",
          url: url,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data: null
        };

        if (params != null) {
          args.data = $.param(params)
        } else {
          delete args.data;
        }

        this.$http(args).success(function (resp:any) {
          if (resp === false || resp === "false" || resp.error != null) {
            console.error("Rpc Error", resp);
            deferred.reject(resp.error);
          } else {
            deferred.resolve(resp)
          }
        });
        return deferred.promise;
      }

      getCharacterInventory(character:String):Q.Promise<Inventory> {
        var url = "http://www.pathofexile.com/character-window/get-items";
        return this.getItems<Inventory>(url, {character: character});
      }

      getStashTab(league:League, tabIndex:number):Q.Promise<StashTab> {
        var url = "http://www.pathofexile.com/character-window/get-stash-items";
        return this.getItems<StashTab>(url, {league: league, tabIndex: tabIndex, tabs: 1}).then(function (stashTab:StashTab) {
          stashTab.info = stashTab.tabs[tabIndex]
          delete stashTab.tabs
          return stashTab
        })
      }

      getCharacters():Q.Promise<Array<CharacterInfo> > {
        var url = "http://www.pathofexile.com/character-window/get-characters";
        return this.getItems<Array<CharacterInfo>>(url, null);

      }
    }


    function generateId(item:FlatItem):String {
      return item.league + "-" + item.character + "-" + item.stashTabIdx + "-" + item.inventoryId + "-" + item.x + "-" + item.y + "-" + item.inSocket;
    }

    function firstNonNull(...xs:any[]):any {
      var res = _.find(xs, function (a) {
        return a != null
      })
      if (res == null) {
        //no undefineds
        return null
      } else {
        return res
      }
    }


    export module ModParsers {
      export interface ModEntry {
        name : string
        value : number
      }

      export class ModParser {
        //Is Boolen are things like Dispels Frozen and Chilled mods, they are either there
        //or they are not
        constructor(private regex:RegExp, public name:string, public title:string, public isBoolean:boolean) {
        }

        parse(mod:ExplicitMod):ModEntry {
          var res = mod.match(this.regex)
          if (res != null) {
            if (_.isString(res[1])) {
              return {name: this.name, value: +res[1]}
            } else if (this.isBoolean) {
              return {name: this.name, value: 1}
            } else {
              return null
            }

          } else {
            return null
          }
        }
      }

      export var all:Array<ModParser> = []

      function regexBased(regex:RegExp, parseStr:string, shortName:string = null, title:string = null, isBoolean = false) {
        shortName = shortName || parseStr.replace(/ /g, "")
        title = title || shortName
        return new ModParser(regex, shortName, title, isBoolean)
      }

      function minDamage(element:String) {
        return regexBased(new RegExp("^Adds (\\d+)-\\d+ " + element + " Damage$"), "", "AddsMin" + element + "Damage", element.substr(0, 3) + "MinDmg")
      }

      function maxDamage(element:String) {
        return regexBased(new RegExp("^Adds \\d+-(\\d+) " + element + " Damage$"), "", "AddsMax" + element + "Damage", element.substr(0, 3) + "MaxDmg")
      }

      function simple(parseStr:string, shortName:string = null, title:string = null, prefix:string = "") {
        return regexBased(new RegExp("^" + prefix + "([.+-\\d]+)%* " + parseStr + "$"), parseStr, shortName, title)
      }

      function simpleTo(parseStr:string, shortName:string = null, title:string = null) {
        return regexBased(new RegExp("^([.+-\\d]+)%* to " + parseStr + "$"), parseStr, shortName, title)
      }

      function gemLevel(element:String) {
        return simpleTo("Level of " + element + " Gems in this item", element + "GemLevel", "+" + element.substr(0, 3) + "G")
      }

      function simpleIncreased(parseStr:string, shortName:string = null, title:string = null) {
        return regexBased(new RegExp("^([.+-\\d]+)%* increased " + parseStr + "$"), parseStr, "Increased" + shortName, title)
      }

      function simpleReduced(parseStr:string, shortName:string = null, title:string = null) {
        return regexBased(new RegExp("^([.+-\\d]+)%* reduced " + parseStr + "$"), parseStr, shortName, title)
      }

      function resist(resistType:String) {
        return simpleTo(resistType + " Resistance", resistType + "Resist", "+%Res" + resistType.substr(0, 3))
      }

      all.push(regexBased(new RegExp("^Reflects ([.+-\\d]+) Physical Damage to Melee Attackers$"), "Reflect Physical", "ReflectPhysical", "Ref"))

      all.push(simple("Life Regenerated per second", "LifeRegen", "LRegen"))
      all.push(simple("Life gained on Kill", "LifeOnKill", "LOK"))
      all.push(simple("Mana Gained on Kill", "ManaOnKill", "MOK"))
      all.push(simple("Life gained for each enemy hit by your Attacks", "LifeOnHit", "LOH"))
      all.push(simple("of Physical Attack Damage Leeched as Life", "LifeLeech", "LLeech"))
      all.push(simple("of Physical Attack Damage Leeched as Mana", "ManaLeech", "MLeech"))
      all.push(simple("additional Block Chance", "AdditionalBlockChance", "Block"))

      all.push(simpleTo("Accuracy Rating", "Acc"))
      all.push(simpleTo("Strength", "Str"))
      all.push(simpleTo("Intelligence", "Int"))
      all.push(simpleTo("Dexterity", "Dex"))
      all.push(simpleTo("all Attributes", "AllAttributes", "AllAts"))
      all.push(simpleTo("maximum Life", "MaximumLife", "Life"))
      all.push(simpleTo("maximum Mana", "MaximumMana", "Mana"))
      all.push(simpleTo("Armour", "ToArmour", "+AR"))
      all.push(simpleTo("Evasion Rating", "ToEvasionRating", "+EV"))
      all.push(simpleTo("maximum Energy Shield", "ToEnergyShield", "+ES"))

      all.push(simpleIncreased("Armour", "IncreasedArmour", "+%AR"))
      all.push(simpleIncreased("Evasion Rating", "IncreasedEvasionRating", "+%EV"))
      all.push(simpleIncreased("Energy Shield", "IncreasedEnergyShield", "+%ES"))
      all.push(simpleIncreased("Armour and Energy Shield", "IncreasedArmourAndEnergyShield", "+%AR&ES"))
      all.push(simpleIncreased("Armour and Evasion", "IncreasedArmourAndEvasion", "+%AR&EV"))
      all.push(simpleIncreased("Evasion and Energy Shield", "IncreasedEvasionAndEnergyShield", "+%EV&ES"))

      all.push(simpleIncreased("maximum Energy Shield", "IncreasedMaximumEnergyShield", "+%MaxES"))

      all.push(simpleIncreased("Quantity of Items found", "ItemQuantity", "IIQ"))
      all.push(simpleIncreased("Rarity of Items found", "ItemRarity", "IIR"))

      all.push(simpleIncreased("Spell Damage", "SpellDamage", "+%SpelDmg"))

      all.push(simpleIncreased("Accuracy Rating", "AccuracyRating", "+%Acc"))
      all.push(simpleIncreased("Cast Speed", "CastSpeed", "+%CastSpd"))
      all.push(simpleIncreased("Movement Speed", "MovementSpeed", "+%MovSpd"))
      all.push(simpleIncreased("Light Radius", "LightRadius", "+%LR"))
      all.push(simpleIncreased("Attack Speed", "AttackSpeed", "+%AttSpd"))
      all.push(simpleIncreased("Projectile Speed", "ProjectileSpeed", "+%ProjSpd"))
      all.push(simpleIncreased("Mana Regeneration Rate", "ManaRegen", "+%MRegen"))
      all.push(simpleIncreased("Critical Strike Chance", "CriticalStrikeChance", "+%CSC"))
      all.push(simpleIncreased("Global Critical Strike Chance", "GlobalCriticalStrikeChance", "+%GCSC"))
      all.push(simpleIncreased("Global Critical Strike Multiplier", "GlobalCriticalStrikeMultiplier", "+%GCSM"))
      all.push(simpleIncreased("Critical Strike Chance for Spells", "CriticalStrikeChanceForSpells", "+%GCCS"))

      all.push(simpleReduced("Enemy Stun Threshold", "ReducedEnemyStunThreshold", "-%StunThres"))
      all.push(simpleIncreased("Stun Duration on enemies", "StunDurationOnEnemies", "+%StnDur"))

      all.push(simpleIncreased("Block and Stun Recovery", "BlockAndStunRecovery", "+%BlkStnRec"))
      all.push(simpleIncreased("Elemental Damage with Weapons", "ElementalDamageWithWeapons", "+%ElDmgWep"))

      all.push(simpleReduced("Attribute Requirements", "ReducedAttributeRequirements", "-%AttrReq"))

      all.push(simpleTo("all Elemental Resistances", "AllResist", "+%ResAll"));
      //All different element types
      ["Fire", "Lightning", "Cold", "Physical", "Chaos"].forEach(function (element) {
        all.push(resist(element))
        all.push(minDamage(element))
        all.push(maxDamage(element))
        all.push(simpleIncreased(element + " Damage", "" + element + "Damage", "+%" + element.substr(0, 3) + "Dmg"))
      });
      //Gem levels
      ["Fire", "Cold", "Lightning", "Melee", "Minion", "Bow", "Strength"].forEach(function (element) {
        all.push(gemLevel(element))
      })
      all.push(simpleTo("Level of Gems in this item", "GemLevel"))

      //Flask specific
      all.push(simple("of Life Recovered from Mana when used", "RemovesLifeFromMana", "-LifeFromMana", "Removes "))
      all.push(simple("Charges when you take a Critical Strike", "RechargesOnCriticalTaken", "RChrgTakeCrit", "Recharges "))
      all.push(simple("Charge when you deal a Critical Strike", "RechargesOnCriticalGiven", "RChrgGiveCrit", "Recharges "))
      all.push(simple("of Life Recovery to Minions", "GrantsLifeToMinions", "LifeToMini", "Grants "))

      all.push(simple("of Recovery applied Instantly", "RecoveryAppliedInstantly", "+%RecInst"))
      all.push(simple("of Physical Attack Damage Leeched as Life during flask effect", "LifeLeechDuringFlask", "%LLeechWFl"))
      all.push(simple("of Physical Attack Damage Leeched as Mana during flask effect", "ManaLeechDuringFlask", "%MLeechWFl"))
      all.push(simple("additional Elemental Resistances during flask effect", "AllResistDuringFlask", "%MLeechWFl"))
      all.push(simple("Extra Charges", "ExtraCharges"))

      all.push(simpleIncreased("Recovery when on Low Life", "RecoveryOnLowLife"))
      all.push(simpleIncreased("Evasion Rating during flask effect", "EvasionRatingDuringFlask"))
      all.push(simpleIncreased("Stun Recovery during flask effect", "StunRecoveryDuringFlask"))
      all.push(simpleIncreased("Life Recovered", "LifeRecovered"))
      all.push(simpleIncreased("Flask Charges gained", "FlaskChargesGained"))
      all.push(simpleIncreased("Charge Recovery", "ChargeRecovery"))
      all.push(simpleIncreased("Armour during flask effect", "ArmourDuringFlask"))
      all.push(simpleIncreased("Amount Recovered", "AmountRecovered"))
      all.push(simpleIncreased("Recovery Speed", "RecoverySpeed"))
      all.push(simpleIncreased("Flask Life Recovery rate", "FlaskLifeRecoveryRate"))
      all.push(simpleIncreased("Flask Mana Recovery rate", "FlaskManaRecoveryRate"))
      all.push(simpleIncreased("Flask effect duration", "FlaskEffectDuration"))
      all.push(simpleIncreased("Movement Speed during flask effect", "MovementSpeedDuringFlask"))

      all.push(regexBased(/Dispels Frozen and Chilled/, null, "DispelsFrozenAndChilled", "NoCol", true))
      all.push(regexBased(/Dispels Shocked/, null, "DispelsShocked", "NoLig", true))
      all.push(regexBased(/Dispels Burning/, null, "DispelsBurning", "NoFir", true))
      all.push(regexBased(/Removes Bleeding/, null, "RemovesBleeding", "NoBle", true))
      all.push(regexBased(/Immunity to Curses during flask effect. Removes Curses on use/, null, "ImmunityToCursesDuringFlask", "NoCur", true))
      all.push(regexBased(/Adds Knockback to Melee Attacks during flask effect/, null, "KnockbackDuringFlask", "KBak", true))
      all.push(regexBased(/Instant Recovery when on Low Life/, null, "InstantRecoveryOnLowLife", "InstLL", true))
      all.push(regexBased(/Instant Recovery/, null, "InstantRecovery", "Inst", true))


      all.push(simpleReduced("Amount Recovered", "ReducedAmountRecovered", "-AmtRec"))
      all.push(simpleReduced("Recovery Speed", "ReducedRecoverySpeed", "-RecSpeed"))
      all.push(simpleReduced("Flask Charges used", "ReducedFlaskChargesUsed", "-ChrgUsed"))


    }

    function isGem(item:AnyItem):boolean {
      return item.frameType === 4
    }

    function isSupportGem(item:AnyItem):boolean {
      return isGem(item) && item.support
    }

    function isCurrency(item:AnyItem):boolean {
      return item.frameType === 5
    }

    function isMap(item:AnyItem):boolean {
      return (item.icon || "").match(/\/2DItems\/Maps\//) != null
    }

    function setRequirements(item:AnyItem, baseItem:BaseItem, flatItem:FlatItem) {

      if (item.name == "Facebreaker") {
        console.log("XXX FACEKBREAER XXXX", item)
      }


      if (baseItem != null) {
        flatItem.level = baseItem.level || 0
        flatItem.dex = baseItem.dex
        flatItem.str = baseItem.str
        flatItem.int = baseItem.int
        return
      }
      //Have to look in the item itself to find it's requirement, note this uses
      //gems if they are slotted so that is why we go the base item type route first
      //However that breaks, i believe for uniques, so i will need to figure that out
      function getReq(name:string):number {
        var req = _.find(item.requirements, function (ireq:ItemRequirement) {
          return ireq == null ? false : ireq.name == name
        })
        if (req != null && req.values[0] != null && req.values[0][0] != null) {
          return +req.values[0][0]
        } else {
          return null;
        }
      }


      flatItem.level = getReq("Level")
      flatItem.dex = getReq("Dex")
      flatItem.str = getReq("Str")
      flatItem.int = getReq("Int")
//      flatItem.str = getReq("Str (gem)")
      return
    }

    function parseExplicitMods(mods:Array<ExplicitMod>, out:FlatItem) {
      var cnt = ModParsers.all.length

      mods.forEach(function (mod:ExplicitMod) {
        if (mod == null) return
        var found = false
        for (var i = 0; i < cnt; i++) {
          var res = ModParsers.all[i].parse(mod)
          if (res != null) {
            found = true;
            //Assign the mod to the item
            (<any> out)[res.name] = res.value
            //break
          }
        }
        if (!found) {
          console.log("Unable to parse mod", mod, out)
        }
      })
    }

    export interface FlatItem {
      //Id fields
      locationId: String
      locationName: string

      league: League
      character: String
      stashTabIdx: number
      inventoryId: String
      x: number
      y: number
      inSocket: number

      name: string
      rarity: Rarity

      cat1: string
      cat2: string

      stashTabInfo? : StashTabInfo
      stashTabName? : string

      baseItem?: BaseItem

      item : AnyItem
      containingItem : AnyItem

      isGem : boolean
      isSupportGem : boolean

      isCurrency : boolean

      level: number
      dex: number
      str: number
      int: number

    }

    function flattenItem(item:AnyItem, baseItem:BaseItem, character:String = null, league:League = null, stashTabInfo:StashTabInfo = null, parent:AnyItem = null):FlatItem {
      var ret:FlatItem = (<any> {})
      parent = parent || (<any> {})

      //Set the name
      ret.name = item.name || item.typeLine

      if (baseItem != null) {
        ret.baseItem = baseItem
        ret.cat1 = baseItem.cat1
        ret.cat2 = baseItem.cat2
      }

      ret.league = firstNonNull(league, item.league, parent.league)
      ret.character = firstNonNull(character)
      ret.stashTabIdx = null
      ret.inventoryId = firstNonNull(item.inventoryId, parent.inventoryId)
      ret.x = firstNonNull(item.x, parent.x)
      ret.y = firstNonNull(item.y, parent.y)
      ret.inSocket = firstNonNull(item.socket)

      //Set the id fields
      if (stashTabInfo != null) {
        ret.stashTabInfo = stashTabInfo
        ret.stashTabIdx = firstNonNull(stashTabInfo.i)
        ret.stashTabName = stashTabInfo.n
      }

      //Set the id
      ret.locationId = generateId(ret)
      //Human readable name of the location
      ret.locationName = ret.stashTabName || ret.character

      ret.isGem = isGem(item)
      ret.isSupportGem = isSupportGem(item)

      ret.isCurrency = isCurrency(item)



      setRequirements(item, baseItem, ret)

      //Add in the explicit mods
      if (item.explicitMods != null && !ret.isGem && !ret.isCurrency) {
        parseExplicitMods(item.explicitMods, ret)
      }

      //Set other fields
      ret.item = item
      if (parent != null) {
        ret.containingItem = parent
      }


      return ret
    }

    function flattenItemAndSocketedItems(item:AnyItem, baseItem:BaseItem, character:String, league:League, stashTabInfo:StashTabInfo):Array<FlatItem> {
      var ret:Array<FlatItem> = []
      var stashTabIndex = stashTabInfo != null ? stashTabInfo.i : null

      ret.push(flattenItem(item, baseItem, character, league, stashTabInfo, null))
      _.each(item.socketedItems, function (socketedItem) {
        ret.push(flattenItem(socketedItem, baseItem, character, league, stashTabInfo, item))
      })

      return ret
    }

    /**
     * Synchronized state between the extension and GGG
     */
    export class GameStateService {

      private characters:Array<CharacterInfo> = null
      private inventories:any = null
      //League -> id -> [StashTab]
      private stashTabs:any = null
      private flatItems:Array<FlatItem> = null


      constructor(private $q:ng.IQService, private $baseItemService:BaseItemService, private $poeRpcService:PoeRpcService, private $storageService:StorageService, private $userAlertService:UserAlertService) {
//        RpcService.getCharacterItems("SantaTheClaws").then(function (items:CharacterItems) {
//          console.log("Inv", items)
//        });

//        $poeRpcService.getStashTab("Standard", 1).then(function (items:StashTab) {
//          console.log("Stash", items)
//        });
//        RpcService.getCharacters().then(function (chars:Array<CharacterInfo>) {
//          console.log("Characters", chars)
//        });
      }

      getFlatItems() {
        return this.flatItems
      }

      reFlattenAll() {

        console.log("Reflatten all")

        var self = this
        //clear the array
        self.flatItems.length = 0

        //Go over the inventories and push all the data in
        _.each(self.inventories, function (inventory:Inventory, character:string) {
          _.each(inventory.items, function (item:AnyItem) {
            var baseItem = self.$baseItemService.get(item)
            var flatItems = flattenItemAndSocketedItems(item, baseItem, character, null, null)
            self.flatItems.push.apply(self.flatItems, flatItems)
          })
        })

        _.each(self.stashTabs, function (stashTabs:any, league:League) {
          _.each(stashTabs, function (stashTab:StashTab, id:String) {
            _.each(stashTab.items, function (item:AnyItem) {
              var baseItem = self.$baseItemService.get(item)
              var flatItems = flattenItemAndSocketedItems(item, baseItem, null, null, stashTab.info)
              self.flatItems.push.apply(self.flatItems, flatItems)
            })
          })
        })

        console.log(self.flatItems)

        this.$storageService.put("flatItems", self.flatItems)
      }


      loadAllFromStorage():Q.Promise<any> {
        var self = this

        function load(key:String, defa:any):Q.Promise<any> {
          return self.$storageService.find(key).then(function (value:any) {
            (<any> self)[key] = value != null ? value : defa
          })
        }

        return Q.all([load("characters", []), load("inventories", {}), load("stashTabs", {}), load("flatItems", [])])
      }


      private setCharacters(characters:Array<CharacterInfo>) {
        this.characters = characters
        this.$storageService.put("characters", this.characters)
      }

      getCharacters():Array<CharacterInfo> {
        return this.characters
      }

      private setInventory(characterName:String, inventory:Inventory) {
        this.inventories[characterName] = inventory
        this.$storageService.put("inventories", this.inventories)
      }

      getInventory(characterName:String):Inventory {
        return this.inventories[characterName]
      }

      getInventories():any {
        return this.inventories
      }

      private setStashTab(league:League, id:number, stashTab:StashTab) {
        if (this.stashTabs[league] == null) {
          this.stashTabs[league] = []
        }
        this.stashTabs[league][id] = stashTab
        this.$storageService.put("stashTabs", this.stashTabs)
      }

      getStashTab(league:League, id:number):StashTab {
        var leagueTab = this.stashTabs[league]
        return leagueTab != null ? this.stashTabs[league][id] : null
      }

      getStashTabs():any {
        return this.stashTabs;
      }

      downloadCharacters():Q.Promise<Array<CharacterInfo>> {
        var self = this
        console.debug("Doing Web Refresh");
        function setCharacters(characters:Array<CharacterInfo>) {
          self.setCharacters(characters)
          return characters
        }

        return (<any> self.$poeRpcService.getCharacters().then(setCharacters))
      }


      downloadInventory(name:String):Q.Promise<Inventory> {
        var self = this

        function setInventory(inventory:Inventory):Inventory {
          self.setInventory(name, inventory)
          return inventory
        }

        function webRefresh():Q.Promise<Inventory> {
          var res:any = self.$poeRpcService.getCharacterInventory(name).fail(function (reason) {
            return Q.reject({reason: reason, name: name})
          })
          return res
        }

        return webRefresh().then(setInventory)
      }


      loopDownloadInventory(name:String, all:boolean = false):Q.Promise<any> {
        var self = this
        var d = Q.defer()

        if (!all && self.getInventory(name) != null) {
          console.debug("Not downloading already downloaded character", name)
          d.resolve(null)
          return d.promise
        }
        function doDownload() {
          self.downloadInventory(name).then(onOk, onReject)
        }

        function onOk(inventory:Inventory) {
          self.setInventory(name, inventory)
          d.resolve(null)
        }

        function onReject(reject:any) {
          if (isThrottleReject(reject)) {
            console.log("Reached the GGG server limit, sleeping for " + RETRY_IN_MS, reject)
            setTimeout(() => doDownload(), RETRY_IN_MS)
          } else {
            d.reject(null)
          }
        }

        doDownload()

        return d.promise;
      }


      loopDownloadInventories(all:boolean = false):Q.Promise<any> {
        var self = this
        var chars = this.getCharacters()

        return Q.allSettled(chars.map((cInfo)=>self.loopDownloadInventory(cInfo.name, all)))
      }

      downloadStashTab(league:League, tabId:number) {
        var self = this

        function setStashTab(stashTab:StashTab):StashTab {
          self.setStashTab(league, tabId, stashTab)
          return stashTab
        }

        function webRefresh():Q.Promise<StashTab> {
          var res:any = self.$poeRpcService.getStashTab(league, tabId).fail(function (reason) {
            return Q.reject({reason: reason, league: league, tabId: tabId})
          })
          return res
        }

        return webRefresh().then(setStashTab)
      }

      loopDownloadStashTab(league:League, tabId:number):Q.Promise<StashTab> {
        var self = this
        var d = Q.defer<StashTab>()

        function doDownload() {
          console.log("Downloading...", league, tabId)
          self.downloadStashTab(league, tabId).then(onOk, onReject)
        }

        function onOk(tab:StashTab) {
          console.log("OK", tabId, tab)
          self.setStashTab(league, tabId, tab)
          d.resolve(tab)
        }

        function onReject(reject:any) {
          if (isThrottleReject(reject)) {
            console.log("Reached the GGG server limit, sleeping for " + RETRY_IN_MS, reject)
            setTimeout(() => doDownload(), RETRY_IN_MS)
          } else {
            console.log("Unexpected Reject Type: ", league, tabId, reject)
            d.reject(reject)
          }
        }

        doDownload()

        return d.promise
      }

      loopDownloadStashTabsForLeague(league:League, all:boolean = false):Q.Promise<any> {
        var self = this
        console.log("Downloading all for league", league)
        var d = Q.defer()
        var i = all ? 0 : (_.isArray(self.stashTabs[league]) ? self.stashTabs[league].length : 0)

        function doDownload(i:number) {
          self.loopDownloadStashTab(league, i).done(function (stashTab) {
            if (i + 1 >= stashTab.numTabs) {
              //all done with this league
              d.resolve(null)
            } else {
              doDownload(i + 1)
            }
          }, function (reject) {
            d.reject(reject)
          })
        }

        doDownload(i)
        return d.promise
      }


      loopDownloadStashTabs(all:boolean = false):Q.Promise<any> {
        var self = this
        var a = Q.defer()

        var leagues = _.uniq(self.getCharacters().map((cInfo)=>cInfo.league).filter((l)=>l !== "Void"))
        var countDown = leagues.length

        leagues.forEach(function (l) {
          self.loopDownloadStashTabsForLeague(l, all).finally(function () {
            countDown--
            if (countDown == 0) {
              a.resolve(null)
            }
          })
        })

        return a.promise
      }
    }

    export class StorageService {
      constructor() {
      }


      put<A>(key:String, value:A):Q.Promise<A> {
        var d = Q.defer<A>()

        var obj:any = {}
        obj[key] = value
        function onSet() {
          if (chrome.runtime.lastError != null) {
            d.reject(chrome.runtime.lastError)
          } else {
            d.resolve(value)
          }
        }

        chrome.storage.local.set(obj, onSet)
        return d.promise;
      }

      find<A>(key:String):Q.Promise<A> {
        var d = Q.defer()

        function onGet(x:A) {
          if (chrome.runtime.lastError != null) {
            d.reject(chrome.runtime.lastError)
          } else {
            var o:any = x
            if (o == null || o[key] == null) {
              d.resolve(null)
            } else {
              d.resolve(o[key])
            }

          }
        }

        chrome.storage.local.get(key, onGet)
        return d.promise;
      }
    }


    /**
     * Make beacons in services that will then be used for pub/sub type stuff.
     */
    export class Beacon<T> {
      listeners:Array<(t:T) => void> = [];

      subscribe(listener:(t:T) => void) {
        this.listeners.push(listener)
      }

      unsubscribe(listener:(t:T) => void) {
        this.listeners = _.filter(this.listeners, (l) => l !== l)
      }

      notifyAll(t:T) {
        this.listeners.forEach((l)=>l(t))
      }
    }

    /**
     * Simple service that will allow publishing messages to the user depending on
     * the state of the program.
     */
    export class UserAlertService {
      msgs:Array<String> = [];
      beacon = new Beacon<String>();

      constructor() {
      }

      log(msg:String) {
        this.msgs.push(msg);
        this.beacon.notifyAll(msg);
      }

    }

    mod.service("$poeRpcService", PoeRpcService);
    mod.service("$baseItemService", BaseItemService);
    mod.service("$storageService", StorageService);
    mod.service("$gameStateService", GameStateService);
    mod.service("$userAlertService", UserAlertService);


    //Damage Icons
    //♨ Fire
    //⚡ Lightning
    //❄ Ice
    //☣ Chaos
    //⚒ Physical

    export interface CharacterInfo {
      class: ClassName
      classId: number
      league: League
      level: number
      name: String
    }

    export interface Inventory {
      error?: String
      character: String
      items: Array<AnyItem>
    }

    export interface StashTab {
      error?: String
      numTabs: number
      items: Array<AnyItem>
      tabs?: Array<StashTabInfo>
      info: StashTabInfo
    }

    export interface StashTabInfo {
      colour: {r:number;g:number;b:number
      }
      i:number
      n:string
      src:string
    }


    export interface Url extends String {
    }

    export interface Rarity extends String {

    }

    //Witch,Duelist,etc
    export interface ClassName extends String {
    }

    //Options include Standard, Hardcore?, Domination?, Nemesis?
    export interface League extends String {

    }

    //These are strings like x% to fire damage
    export interface ExplicitMod extends String {

    }

    //D,S.I,G -- G is Portal, probably other white sockets
    export interface SocketColour extends String {

    }

    export interface InventoryId extends String {
      //Helm
      //Amulet
      //Ring
      //Ring2
      //Flask (0-4, 0)
      //Weapon
      //BodyArmour
      //Offhand
      //Weapon2
      //Offhand2
      //Gloves
      //Boots
      //MainInventory
      //Stash1
      //Stash...
      //Stash35
    }


    export interface AnyItem {
      verified: boolean
      w: number //width and height a big two handed is 2w by 3h a currency item 1w1h a dagger 1w3h
      h: number
      icon: Url;
      support: boolean
      league: League
      sockets: Array<Socket>
      name: string
      typeLine: string
      identified: boolean
      properties: Array<ItemProperty>
      requirements: Array<ItemRequirement>
      descrText?: string
      secDescrText?: string
      explicitMods: Array<ExplicitMod>
      frameType: number
      socketedItems: Array<AnyItem>

      //For items that are not socketed in other items
      x?: number //The top left corner, when in an item slot, this is 0,0 from what i can tell
      y?: number
      inventoryId?: InventoryId

      //For items that are socketed in other items
      socket?: number
      colour?: SocketColour

    }

    export interface Socket {
      group: number; //used for socket groups, aka a 6 linked would have all sockets in group 0
      attr: String //Seems to be DSI not sure what white is as I don't have a Tabula Rasa ... yet...
    }

    export interface ItemProperty {
      name : String
      values : Array<ItemPropertyValue>
      displayMode: number
    }

    export interface ItemPropertyValue extends Array<Number> {

    }

    export interface ItemRequirement {
      name?: String
      values: Array<Array<ItemRequirementValue>>
      displayMode: number
    }

    export interface ItemRequirementValue extends Array<String> {

    }


  }
}