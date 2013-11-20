//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/17/13 2:25 PM
//////////////////////////////////////////////////////////////


/// <reference path="_all.d.ts" />

/**
 * This test shows how to test an angular directive. Angular Mock
 * is used to setup modules as well as to inject test state.
 *
 * A more thorough example can be found here:
 * https://github.com/vojtajina/ng-directive-testing
 */
describe('menubar', function () {
  var elm:JQuery, scope:any;

  //Sample data used to test the directive with
  var sample = () => ["bar", "baz", "boz"].map(function (name) {
    return {
      url: "#" + name,
      icon: "icon-" + name,
      name: name
    }
  });

  //Ensure we have the module loaded
  beforeEach(module('directives.Menubar'));

  //Compile the directive we are testing
  beforeEach(inject(function ($rootScope, $compile) {
    elm = angular.element('<div><menubar entries="entries"></menubar></div>');
    scope = $rootScope;
    scope.entries = sample()
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should create a list of link ', inject(function ($compile:any, $rootScope:any) {
    //Re-extract the samples from the dom
    var extracted = elm.find('li>a').map(function (i:number, e:any) {
      e = $(e);
      return {
        url: e.attr("href"),
        icon: e.find('>span>i').attr('class'),
        name: e.find('>span').text().substr(1)
      }
    }).get();

    //Compare what was extracted from the dom with what was there
    expect(extracted).toEqual(sample())

  }))
});