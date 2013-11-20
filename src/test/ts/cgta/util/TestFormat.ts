//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/17/13 12:29 AM
//////////////////////////////////////////////////////////////


/// <reference path="_all.d.ts" />

import Fmt = Cgta.Util.Format


describe('duration', function () {
  it("should produce the right strings", function () {
    expect(Fmt.durationNs(555)).toEqual("555ns");
    expect(Fmt.durationMs(555)).toEqual("555ms");
    expect(Fmt.durationMs(5555)).toEqual("5s555ms");
    expect(Fmt.durationMs(56555)).toEqual("56s555ms");
  });
});

describe('commatize', function () {
  it("should produce the right strings", function () {
    expect(Fmt.commatize(1234)).toEqual("1,234");
    expect(Fmt.commatize(12345678)).toEqual("12,345,678");
    expect(Fmt.commatize(12345678.901)).toEqual("12,345,678.901");
    expect(Fmt.commatize(-1234)).toEqual("-1,234");
    expect(Fmt.commatize(-12345678)).toEqual("-12,345,678");
    expect(Fmt.commatize(-12345678.901)).toEqual("-12,345,678.901");
  });
});

describe('monetize', function () {
  it("should produce the right strings", function () {
    expect(Fmt.monetize(1234)).toEqual("$1234.00");
    expect(Fmt.monetize(12345678)).toEqual("$12345678.00");
    expect(Fmt.monetize(12345678.901)).toEqual("$12345678.90");
    expect(Fmt.monetize(-1234)).toEqual("-$1234.00");
    expect(Fmt.monetize(-12345678)).toEqual("-$12345678.00");
    expect(Fmt.monetize(-12345678.901)).toEqual("-$12345678.90");
    expect(Fmt.monetize(0)).toEqual("$0.00");
    expect(Fmt.monetize(-0)).toEqual("-$0.00");
  });
});



describe('comonetize', function () {
  it("should produce the right strings", function () {
    expect(Fmt.comonetize(1234)).toEqual("$1,234.00");
    expect(Fmt.comonetize(12345678)).toEqual("$12,345,678.00");
    expect(Fmt.comonetize(12345678.901)).toEqual("$12,345,678.90");
    expect(Fmt.comonetize(-1234)).toEqual("-$1,234.00");
    expect(Fmt.comonetize(-12345678)).toEqual("-$12,345,678.00");
    expect(Fmt.comonetize(-12345678.901)).toEqual("-$12,345,678.90");
    expect(Fmt.comonetize(-100.4566)).toEqual("-$100.46");
    expect(Fmt.comonetize(0)).toEqual("$0.00");
    expect(Fmt.comonetize(-0)).toEqual("-$0.00");
  });
});

describe('prettyPrice', function () {
  it("should produce the right strings", function () {
    expect(Fmt.prettyPrice(12.5,.125)).toEqual("12+4/8");
  });
});






