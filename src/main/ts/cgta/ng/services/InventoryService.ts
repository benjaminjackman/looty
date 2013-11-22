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
    var RETRY_IN_MS = 10000;

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
          if ((<any> resp) === "false" || resp.error != null) {
            console.error("Rpc Error", resp.error || " Unknown error!");
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

      getStashTab(league:League, tabIndex:Int):Q.Promise<StashTab> {
        var url = "http://www.pathofexile.com/character-window/get-stash-items";
        return this.getItems<StashTab>(url, {league: league, tabIndex: tabIndex});
      }

      getCharacters():Q.Promise<Array<CharacterInfo> > {
        var url = "http://www.pathofexile.com/character-window/get-characters";
        return this.getItems<Array<CharacterInfo>>(url, null);

      }
    }

    export class FlatItem {
      constructor() {

      }
    }

    function rpcError(error:String) {
      console.error("Unable to refresh ", error)
    }


    /**
     * Synchronized state between the extension and GGG
     */
    export class GameStateService {
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

      private characters:Array<CharacterInfo> = []
      private inventories:any = {}
      private stashTabs:any = {}
      private flatItems:Array<FlatItem> = []

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

      private setStashTab(league:League, id:Int, stashTab:StashTab) {
        if (this.stashTabs[league] == null) {
          this.stashTabs[league] == {}
        }
        this.stashTabs[league][id] = stashTab
        this.$storageService.put("stashtabs", this.stashTabs)
      }

      getStashTab(league:League, id:Int):StashTab {
        var leagueTab = this.stashTabs[league]
        return leagueTab != null ? this.stashTabs[league][id] : null
      }

      refreshCharacters(webAlways?:boolean):Q.Promise<Array<CharacterInfo>> {
        var self = this;
        webAlways = webAlways == null ? false : webAlways;


        function webRefresh():Q.Promise<Array<CharacterInfo>> {
          console.debug("Doing Web Refresh");
          function setCharacters(characters: Array<CharacterInfo>) {
            self.setCharacters(characters)
            return characters
          }
          return (<any> self.$poeRpcService.getCharacters().then(setCharacters).fail(rpcError))
        }

        if (webAlways) {
          return webRefresh()
        } else {
          //Refresh only when we no characters field in storage
          var storageRefresh = this.$storageService.find<Array<CharacterInfo> >('characters')

          function onFind(characters:Array<CharacterInfo>) {
            if (characters == null) {
              return webRefresh()
            } else {
              return Q(characters)
            }
          }

          //Typescript is having a hard time understanding that this is invoking
          //then<U>(onFulfill: (value: T) => IPromise<U>, ...) rather than
          //then<U>(onFulfill: (value: T) => U, ...)
          return (<any> storageRefresh.then(onFind).fail(webRefresh))
        }
      }



//      refreshInventory(name:String, forced?:Boolean):Q.Promise<Inventory> {
//        var self = this
//
//        function doRefresh():Q.Promise<Inventory> {
//          var res:any = self.$poeRpcService.getCharacterInventory(name).fail(function (reason) {
//            if (_.isString(reason) && reason.match(/throttle/) != null) {
//              //GGG throttles so retry in a bit.
//              console.log("...Throttled..", name, reason)
//              return Q(0).delay(RETRY_IN_MS).then(doRefresh)
//            } else {
//              console.error("Unable to complete rpc for character", reason)
//              //Unknown reason for failure, so stop
//              return Q.reject(reason)
//            }
//          })
//          return res
//        }
//
//        //See if we have the items in the storage.
//        return self.$storageService.find("inventories-" + name).then(function (inventories) {
//          if (inventories == null || inventories[name] == null) {
//            function setInventory(inventory:Inventory) {
//              self.$storageService.put("inventories-" + name, inventory)
//              return inventories
//            }
//
//            return doRefresh().then(setInventory)
//          } else {
//            return inventories
//          }
//        })
//      }
//
//      refreshInventories(characters:Array<String>, forced?:Boolean):Q.Promise<any> {
//        var self = this
//        //Go over each character and refresh their inventory, if we fail due to
//        //throttle with server then we need to retry.
//        var promises = characters.map(function (name:String) {
//          return self.refreshInventory(name);
//        });
//
//        return (<any> Q.allSettled(promises))
//      }
//
//      getInventories():Q.Promise<Array<Inventory> > {
//        var self = this
//
//        function updateInventories(characterInfos:Array<CharacterInfo>) {
//          return self.refreshInventories(characterInfos.map((ci) => ci.name))
//        }
//
//        return (<any> this.refreshCharacters().then(updateInventories))
//      }
//
//      refreshStash(league:League, id:Int):Q.Promise<StashTab> {
//        var self = this
//        return null;
//      }

    }

    export class StorageService {
      constructor() {
      }


//      upsert<A>(key:String, f:(x:A) => A):Q.Promise<A> {
//        var d = Q.defer()
//
//        chrome.storage.local.get(key, function (x:any) {
//          var oldValue : any = null
//          if (x != null && x[key] != null) {
//            oldValue = x[key]
//          }
//          Q(f(oldValue)).then(function (v) {
//            var obj:any = {}
//            obj[key] = v
//            function onSet() {
//              if (chrome.runtime.lastError != null) {
//                d.reject(chrome.runtime.lastError)
//              } else {
//                d.resolve(v)
//              }
//            }
//
//            chrome.storage.local.set(obj, onSet)
//          })
//        });
//
//        return d.promise;
//      }

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
      classId: Int
      league: League
      level: Int
      name: String
    }

    export interface Inventory {
      error?: String
      character: String
      items: Array<InventoryItem>
    }

    export interface StashTab {
      error?: String
      numTabs: Int
      items: Array<InventoryItem>
    }


    export interface Int extends Number {

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
      w: Int //width and height a big two handed is 2w by 3h a currency item 1w1h a dagger 1w3h
      h: Int
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
      frameType: Int
      socketedItems: Array<SocketedItem>
    }

    export interface InventoryItem extends AnyItem {
      x: Int //The top left corner, when in an item slot, this is 0,0 from what i can tell
      y: Int
      inventoryId: InventoryId
    }
    export interface SocketedItem extends AnyItem {
      socket: Int
      colour: SocketColour  //Rhymes with Zap Brannigan's favorite fabric.
    }

    export interface Socket {
      group: Int; //used for socket groups, aka a 6 linked would have all sockets in group 0
      attr: String //Seems to be DSI not sure what white is as I don't have a Tabula Rasa ... yet...
    }

    export interface ItemProperty {
      name : String
      values : Array<ItemPropertyValue>
      displayMode: Int
    }

    export interface ItemPropertyValue extends Array<Number> {

    }

    export interface ItemRequirement {
      name: String
      values: Array<ItemRequirementValue>
      displayMode: Int
    }

    export interface ItemRequirementValue extends Array<String> {

    }


  }
}