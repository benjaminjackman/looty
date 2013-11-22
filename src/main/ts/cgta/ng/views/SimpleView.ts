//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 11/20/13 12:00 AM
//////////////////////////////////////////////////////////////

module Cgta.Views {
  export module SimpleView {
    var mod = angular.module("views.SimpleView", []);
    import CharacterInfo = Cgta.Services.CharacterInfo

    export class SimpleCtrl {
      stuff = "Nothing to see here"
      constructor($gameStateService: Cgta.Services.GameStateService) {

        $gameStateService.loadAllFromStorage()
          .then(() => $gameStateService.downloadCharacters())
          .then(() => $gameStateService.loopDownloadInventories())
          .then(() => $gameStateService.loopDownloadStashTabs())
          .finally(() => console.log("Characters", $gameStateService.getCharacters()))
          .finally(() => console.log("Inventories", $gameStateService.getInventories()))
          .finally(() => console.log("Stash Tabsxx", $gameStateService.getStashTabs()))
          .finally(() => $gameStateService.reFlattenAll())
          .done()

      }

    }

    mod.controller("SimpleCtrl",SimpleCtrl)

  }
}