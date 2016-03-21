System.register(['angular2/core', './package.component', './file'], function(exports_1, context_1) {
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
    var core_1, package_component_1, file_1;
    var PackageNewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (package_component_1_1) {
                package_component_1 = package_component_1_1;
            },
            function (file_1_1) {
                file_1 = file_1_1;
            }],
        execute: function() {
            PackageNewComponent = (function () {
                function PackageNewComponent() {
                    this.onNewPackageCreated = new core_1.EventEmitter();
                    this.submitted = false;
                    this.newPackage = new package_component_1.FilePackage(0, "Null", "None", []);
                    this.newPackage.files = [];
                }
                PackageNewComponent.prototype.ngOnInit = function () {
                    window.addEventListener("drop", function (e) {
                        //e = e || event;
                        e.preventDefault();
                        return false;
                    }, false);
                    window.addEventListener("dragover", function (e) {
                        //e = e || event;
                        e.preventDefault();
                    });
                    var divDropzone = "#uxPackageDocs";
                    var hoverCounter = 0;
                    var fileNum = 1;
                    var p = this.newPackage;
                    var dz = new Dropzone(divDropzone, {
                        init: function () {
                            this.on("queuecomplete", function () {
                                //getEventDocs($("#RelatedDocs").data("lastCaller"));
                            });
                            this.on("success", function (file, response) {
                                console.log("success");
                            });
                            this.on("addedfile", function (file) {
                                var thisDropzone = this;
                                console.log("addedfile");
                            });
                            this.on("error", function (file) {
                                if (!p.files)
                                    p.files = [];
                                p.files.push(new file_1.File(fileNum, file.name));
                                var num = fileNum;
                                var selector = "#file" + fileNum;
                                var fileRef = '<div id="file' + fileNum + '">' + file.name + ' <progress max="100" value"0"></progress></div>';
                                $(divDropzone).append(fileRef);
                                fileNum++;
                                setTimeout(function () {
                                    $(selector).html('<a href="#">' + file.name + '</a>');
                                }, 1500 + (500 * num));
                            });
                            this.on("sending", function (file, xhr, formData) {
                                console.log("sending");
                            });
                            this.on("removedfile", function () {
                                console.log("removedfile");
                            });
                            this.on("uploadprogress", function (file, progress) {
                                console.log("progress");
                            });
                            // These methods are for styling the target div during hovering.
                            this.on("dragenter", function () {
                                $(divDropzone).addClass("dropzone-hover");
                                hoverCounter++;
                            });
                            this.on("dragleave", function () {
                                hoverCounter--;
                                if (hoverCounter === 0) {
                                    $(divDropzone).removeClass("dropzone-hover");
                                }
                            });
                            this.on("drop", function (e) {
                                hoverCounter--;
                                $(divDropzone).removeClass("dropzone-hover");
                            }); // END of ondrop
                        },
                        thumbnail: function (file, dataUrl) {
                            /* Noop.  This disables file preview generation (resized image content for image uploads) */
                        },
                        paramName: "file",
                        url: "/noop",
                        previewTemplate: "<div></div>",
                        previewsContainer: "#uxPackageDocs",
                        clickable: false
                    });
                };
                PackageNewComponent.prototype.onSubmit = function () {
                    console.log("About to emit");
                    console.log("newPackage: ");
                    console.log(this.newPackage);
                    this.onNewPackageCreated.emit(this.newPackage);
                    this.submitted = true;
                    console.log(this.newPackage);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PackageNewComponent.prototype, "onNewPackageCreated", void 0);
                PackageNewComponent = __decorate([
                    core_1.Component({
                        selector: 'package-new',
                        providers: [],
                        templateUrl: '/partial/packagenew',
                    }), 
                    __metadata('design:paramtypes', [])
                ], PackageNewComponent);
                return PackageNewComponent;
            }());
            exports_1("PackageNewComponent", PackageNewComponent);
        }
    }
});
//# sourceMappingURL=package-new.component.js.map