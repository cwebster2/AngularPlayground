"use strict";
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/> 
var browser_1 = require("angular2/platform/browser");
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var http_1 = require("angular2/http");
var app_component_1 = require("./app.component");
browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.provide(LocationStrategy, { useClass: HashLocationStrategy })]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=boot.js.map