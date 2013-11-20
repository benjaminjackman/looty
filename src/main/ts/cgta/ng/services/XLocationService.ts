//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/29/13 1:59 PM
//////////////////////////////////////////////////////////////


module Cgta {
  export module Services {
    var app = angular.module("services.XLocationService", [])

    export interface XLocationService extends ng.ILocationService {
      skipReload(): XLocationService;
    }


    app.factory('xLocation', [
      '$location',
      '$route',
      '$rootScope',
      function ($location, $route, $rootScope) {
        //This will avoid triggering a reload of the page when the location is changed.
        //Can be chained with the normal location calls as follows
        //          xLocation.skipReload().search('tday', $scope.tday)
        //That will change the query parameters without changing the page
        $location.skipReload = function () {
          var lastRoute = $route.current;
          var un = $rootScope.$on('$locationChangeSuccess', function () {
            $route.current = lastRoute;
            un();
          });
          return $location;
        };
        return $location;
      }
    ]);
  }
}