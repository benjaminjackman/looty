//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/17/13 1:17 PM
//////////////////////////////////////////////////////////////


/// <reference path="_all.d.ts" />

module Cgta.Directives.Menubar {
  var mod = angular.module("directives.Menubar", []);

  export interface IMenubarItem {
    url:string
    name:string
    icon:string
  }

  mod.directive('menubar', function () {
      return {
        restrict: "E",
        scope: {
          entries: "="
        },
        replace: true,
        template: Templates.MenubarDirective
      }
    }
  )
}

