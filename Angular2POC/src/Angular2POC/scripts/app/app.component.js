System.register(["angular2/core", "angular2/router", "./components/static.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, static_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (static_component_1_1) {
                static_component_1 = static_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(router, location) {
                    this.router = router;
                    this.location = location;
                    this.routes = null;
                }
                ngOnInit() {
                    if (this.routes === null) {
                        this.routes = [
                            { path: "/index", component: static_component_1.StaticComponent, name: "Index", useAsDefault: true },
                            new router_1.AsyncRoute({
                                path: "/sub",
                                name: "Sub",
                                loader: () => System.import("app/components/mvc.component").then(c => c["MvcComponent"])
                            }),
                            new router_1.AsyncRoute({
                                path: "/numbers",
                                name: "Numbers",
                                loader: () => System.import("app/components/api.component").then(c => c["ApiComponent"])
                            })
                        ];
                        this.router.config(this.routes);
                    }
                }
                getLinkStyle(route) {
                    return this.location.path().indexOf(route.path) > -1;
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: "app",
                    templateUrl: "/app/app.html",
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [router_1.Router, router_1.Location])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map