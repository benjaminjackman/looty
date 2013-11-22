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

    function isThrottleReject(reject:any): boolean {
      return reject != null &&
        reject.reason != null &&
        _.isString(reject.reason.message) &&
        reject.reason.message.match(/too frequently/) != null
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
        return this.getItems<StashTab>(url, {league: league, tabIndex: tabIndex});
      }

      getCharacters():Q.Promise<Array<CharacterInfo> > {
        var url = "http://www.pathofexile.com/character-window/get-characters";
        return this.getItems<Array<CharacterInfo>>(url, null);

      }
    }

    interface FlatItem {
      locationId : String
      name : String
    }

    function flattenItem(item:InventoryItem):FlatItem {
      var ret:FlatItem = (<any> {})
      //TODO
      return ret

    }

    /**
     * Synchronized state between the extension and GGG
     */
    export class GameStateService {

      private characters:Array<CharacterInfo> = null
      private inventories:any = null
      private stashTabs:any = null
      private flatItems:Array<FlatItem> = []


      constructor(private $q:ng.IQService, private $poeRpcService:PoeRpcService, private $storageService:StorageService, private $userAlertService:UserAlertService) {
//        RpcService.getCharacterItems("SantaTheClaws").then(function (items:CharacterItems) {
//          console.log("Inv", items)
//        });
//        RpcService.getStashItems("Standard", 55).then(function (items:StashItems) {
//          console.log("Stash", items)
//        });
//        RpcService.getCharacters().then(function (chars:Array<CharacterInfo>) {
//          console.log("Characters", chars)
//        });
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
          this.stashTabs[league] = {}
        }
        this.stashTabs[league][id] = stashTab
        this.$storageService.put("stashtabs", this.stashTabs)
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

      downloadInventories(all:boolean):Q.Promise<any> {
        var self = this
        var d = Q.defer()
        var chars = this.getCharacters()
        var countDown = chars.length

        function downloadFor(name: String) {
          function doDownload(){
            self.downloadInventory(name).then(onOk, onReject)
          }
          function onOk(inventory:Inventory) {
            self.setInventory(name, inventory)
            countDown--
            if (countDown == 0) {d.resolve(null)}
          }
          function onReject(reject:any) {
            if (isThrottleReject(reject)) {
              console.log("Reached the GGG server limit, sleeping for " + RETRY_IN_MS, reject)
              setTimeout(() => doDownload(), RETRY_IN_MS)
            } else {
              countDown--
              if (countDown == 0) {d.reject(reject)}
            }
          }
          doDownload()
        }

        chars.forEach((cInfo)=>downloadFor(cInfo.name))

        return d.promise
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

      downloadStashTabs(all:boolean):Q.Promise<any> {
        console.log("Downloading stash tabs")
        var self = this
        var a = Q.defer()

        function downloadAllForLeague(league:League):Q.Promise<any> {
          console.log("Downloading all for league", league)
          var b = Q.defer()
          var i = all ? 0 : (_.isArray(self.stashTabs[league]) ? self.stashTabs[league].length - 1 : 0)

          function doDownload(i:number) {
            console.log("Downloading...", league, i)
            self.downloadStashTab(league, i).then(onOk(i), onReject(i))
          }

          //first download the first stashtab
          function onOk(i:number) {
            return function (tab:StashTab) {
              console.log("OK", i, tab)
              if (i + 1 >= tab.numTabs) {
                //all done
                b.resolve(null)
              } else {
                self.setStashTab(league, i, tab)
                doDownload(i + 1)
              }
            }
          }

          function onReject(i:number) {
            return function (reject:any) {
              if (isThrottleReject(reject)) {
                console.log("Reached the GGG server limit, sleeping for " + RETRY_IN_MS, reject)
                setTimeout(() => doDownload(i), RETRY_IN_MS)
              } else {
                console.log("Unexpected Reject Type: ", league, i, reject)
                b.reject(reject)
              }
            }
          }

          doDownload(0)

          return b.promise
        }

        var leagues = _.uniq(self.getCharacters().map((cInfo)=>cInfo.league).filter((l)=>l !== "Void"))
        var countDown = leagues.length

        leagues.forEach(function (l) {
          downloadAllForLeague(l).finally(function () {
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
      items: Array<InventoryItem>
    }

    export interface StashTab {
      error?: String
      numTabs: number
      items: Array<InventoryItem>
    }


    export interface Url extends String {
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
      verified: Boolean
      w: number //width and height a big two handed is 2w by 3h a currency item 1w1h a dagger 1w3h
      h: number
      icon: Url;
      support: Boolean
      league: League
      sockets: Array<Socket>
      name: String
      typeLine: String
      identified: Boolean
      properties: Array<ItemProperty>
      requirements: Array<ItemRequirement>
      descrText?: String
      secDescrText?: String
      explicitMods: Array<ExplicitMod>
      frameType: number
      socketedItems: Array<SocketedItem>
    }

    export interface InventoryItem extends AnyItem {
      x: number //The top left corner, when in an item slot, this is 0,0 from what i can tell
      y: number
      inventoryId: InventoryId
    }
    export interface SocketedItem extends AnyItem {
      socket: number
      colour: SocketColour  //Rhymes with Zap Brannigan's favorite fabric.
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
      name: String
      values: Array<ItemRequirementValue>
      displayMode: number
    }

    export interface ItemRequirementValue extends Array<String> {

    }


  }
}