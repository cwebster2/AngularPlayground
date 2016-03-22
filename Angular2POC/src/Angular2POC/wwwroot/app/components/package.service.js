System.register(['./mock-packages', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_packages_1, core_1;
    var PackageService;
    return {
        setters:[
            function (mock_packages_1_1) {
                mock_packages_1 = mock_packages_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PackageService = (function () {
                function PackageService() {
                }
                PackageService.prototype.getPackages = function () {
                    return mock_packages_1.PACKAGES;
                };
                PackageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PackageService);
                return PackageService;
            })();
            exports_1("PackageService", PackageService);
        }
    }
});
//# sourceMappingURL=package.service.js.map