System.register(['angular2/core', './package-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, package_detail_component_1;
    var PackageListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (package_detail_component_1_1) {
                package_detail_component_1 = package_detail_component_1_1;
            }],
        execute: function() {
            PackageListComponent = (function () {
                function PackageListComponent() {
                }
                PackageListComponent.prototype.onSelect = function (mypackage) {
                    this.selectedPackage = mypackage;
                };
                PackageListComponent = __decorate([
                    core_1.Component({
                        selector: 'package-list',
                        templateUrl: '/partial/packagelist',
                        directives: [package_detail_component_1.PackageDetailComponent],
                        inputs: ['packages']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PackageListComponent);
                return PackageListComponent;
            })();
            exports_1("PackageListComponent", PackageListComponent);
        }
    }
});
//# sourceMappingURL=package-list.component.js.map