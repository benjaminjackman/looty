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
    import FlatItem = Cgta.Services.FlatItem
    import ModParsers = Cgta.Services.ModParsers
    import ModParser = ModParsers.ModParser

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
          .done(() => render($gameStateService.getFlatItems()))


        function render(items : Array<FlatItem>) {
          var columns = ModParsers.all.map(function(mp: ModParser) {
            return {id: mp.name, name: mp.name, field: mp.name, sortable:true}
          })

          var options = {
             enableCellNavigation: true,
            enableColumnReorder:false,
             multiColumnSort: true
           };

          var grid = new Slick.Grid("#myGrid",items,columns,options)


        }

      }

    }

    mod.controller("SimpleCtrl",SimpleCtrl)

  }
}