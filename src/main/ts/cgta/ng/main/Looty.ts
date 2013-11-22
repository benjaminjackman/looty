//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 6/28/13 1:57 PM
//////////////////////////////////////////////////////////////

/// <reference path="_all.d.ts" />

import Menubar = Cgta.Directives.Menubar

declare var TradeStreamCtrl:any

module Cgta.Main.Looty {
  var mod = angular.module('main.Looty', ['views', 'services', 'directives', 'ui', 'ngRoute']);

  mod.config(['$sceProvider', function ($sceProvider) {
    $sceProvider.enabled(false);
  }]);
  mod.config([
    '$compileProvider',
    function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
    }]);

//  mod.config([
//    '$compileProvider',
//    function ($compileProvider) {
//      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
//      $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|chrome-extension):|data:image\//)
//
//    }
//  ]);

  interface View extends Menubar.IMenubarItem {
    template?:string
    templateUrl?:string
    controller?:string
  }


  function menuItems():Array<View> {
    return [
      {
        url: '#/home',
        name: 'Home',
        icon: 'halflings home'
      },
      {
        url: '#/simple',
        name: 'Simple',
        icon: 'halflings tag',
        template: Templates.SimpleView,
        controller: "SimpleCtrl"
      }
    ];
  }

  mod.controller('ThetaMenuBarCtrl', ($scope) => {
    $scope.menuItems = menuItems()
  });

  mod.config(($routeProvider) => {
    menuItems().forEach((view) => {
      if (view.url.charAt(0) == '#') {
        var route:any = {controller: view.controller};
        if (view.template != null) {
          route.template = view.template
        }
        if (view.templateUrl != null) {
          route.templateUrl = view.templateUrl
        }
        $routeProvider.when(view.url.slice(1), route);
      }
      $routeProvider.otherwise({template: "Unknown URL"});
    })
  });


}

