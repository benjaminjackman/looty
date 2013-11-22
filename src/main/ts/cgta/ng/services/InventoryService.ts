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

    /**
     * Wraps rpc calls to the ggg servers.
     */
    export class RpcService {

      constructor(private $q:ng.IQService, private $http:ng.IHttpService) {
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

      getCharacterItems(character:String):Q.Promise<CharacterItems> {
        var url = "http://www.pathofexile.com/character-window/get-items";
        return this.getItems<CharacterItems>(url, {character: character});
      }

      getStashItems(league:League, tabIndex:Int):Q.Promise<StashItems> {
        var url = "http://www.pathofexile.com/character-window/get-stash-items";
        return this.getItems<StashItems>(url, {league: league, tabIndex: tabIndex});
      }

      getCharacters():Q.Promise<Array<CharacterInfo> > {
        var url = "http://www.pathofexile.com/character-window/get-characters";
        return this.getItems<Array<CharacterInfo>>(url, null);

      }
    }

    /**
     * Abstracts inventory into a searchable updatable sync'd thing.
     */
    export class InventoryService {
      constructor(private $q:ng.IQService, private $rpcService:RpcService, private $storageService:StorageService, private $userAlertService:UserAlertService) {

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

      characters:Array<CharacterInfo> = null;

      //doUpdate(tabs: Array<Int>, )
      refreshCharacters(forced?:boolean):Q.Promise<Array<CharacterInfo> > {
        var self = this;
        forced = forced == null ? false : forced;
        function rpcError(error:String) {
          console.error("Unable to refresh characters ", error)
        }

        function setCharacters(characters:Array<CharacterInfo>) {
          console.debug("Set characters", characters);
          self.characters = characters
          return (<any> self.$storageService.put({characters: characters}).then(() => characters))
        }

        function doRefresh() :Q.Promise<Array<CharacterInfo>> {
          console.debug("Doing refresh");
          return self.$rpcService.getCharacters().then(setCharacters, rpcError)
        }

        if (forced) {
          return doRefresh()
        } else {
          //Refresh only when we no characters field in storage
          var charactersFromStorage = this.$storageService.find<Array<CharacterInfo> >('characters')
          function onFind(characters: Array<CharacterInfo>) {
            if (characters == null) {
              return doRefresh()
            } else {
              self.characters = characters
              return Q.fcall(() => characters)
            }
          }
          return (<any> charactersFromStorage.then(onFind).fail(doRefresh))
        }
      }

      refreshCharacterInventories() {
        //Go over each character and refresh their inventory, if we fail due to
        //throttle with server then we need to retry.
      }

      refreshStash() {

      }

      getCharacters() {return this.characters}


      ensure():Q.Promise<any> {
        return this.refreshCharacters()
      }


    }

    export class StorageService {
      constructor() {
      }

      put(items:Object):Q.Promise<any> {
        var d = Q.defer()

        function onSet() {
          if (chrome.runtime.lastError != null) { d.reject(chrome.runtime.lastError) } else { d.resolve(null) }
        }

        chrome.storage.local.set(items, onSet);
        return d.promise;
      }

      find<A>(key:String):Q.Promise<A> {
        var d = Q.defer()

        function onGet(x:A) {
          if (chrome.runtime.lastError != null) { d.reject(chrome.runtime.lastError) } else { d.resolve((<any> x)[key]) }
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

    mod.service("$rpcService", RpcService);
    mod.service("$storageService", StorageService);
    mod.service("$inventoryService", InventoryService);
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

    export interface CharacterItems {
      error?: String
      character: String
      items: Array<InventoryItem>
    }

    export interface StashItems {
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