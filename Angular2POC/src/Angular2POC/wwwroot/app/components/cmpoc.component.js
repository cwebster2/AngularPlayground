System.register(["angular2/core", './package.service', './package-list.component', './package-new.component'], function(exports_1, context_1) {
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
    var core_1, package_service_1, package_list_component_1, package_new_component_1;
    var CMPOCComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (package_service_1_1) {
                package_service_1 = package_service_1_1;
            },
            function (package_list_component_1_1) {
                package_list_component_1 = package_list_component_1_1;
            },
            function (package_new_component_1_1) {
                package_new_component_1 = package_new_component_1_1;
            }],
        execute: function() {
            CMPOCComponent = (function () {
                function CMPOCComponent(_packageService) {
                    this._packageService = _packageService;
                    this.pageTitle = 'CM POC';
                    this.addMode = false;
                }
                CMPOCComponent.prototype.ngOnInit = function () {
                    this.getPackages();
                    toastr.options = {
                        "closeButton": false,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": "toast-bottom-right",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "5000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };
                };
                CMPOCComponent.prototype.getPackages = function () {
                    this.packages = this._packageService.getPackages();
                };
                CMPOCComponent.prototype.createPackage = function () {
                    this.addMode = true;
                };
                CMPOCComponent.prototype.onNewPackageCreated = function (newPackage) {
                    this.addMode = false;
                    this.packages.unshift(newPackage);
                    toastr.success("New Package: '" + newPackage.name + "' submitted!");
                };
                CMPOCComponent = __decorate([
                    core_1.Component({
                        selector: "cmpoc",
                        templateUrl: "/partial/cmpoc",
                        directives: [package_list_component_1.PackageListComponent, package_new_component_1.PackageNewComponent],
                        providers: [package_service_1.PackageService]
                    }), 
                    __metadata('design:paramtypes', [package_service_1.PackageService])
                ], CMPOCComponent);
                return CMPOCComponent;
            }());
            exports_1("CMPOCComponent", CMPOCComponent);
        }
    }
});
//# sourceMappingURL=cmpoc.component.js.map