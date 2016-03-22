import {Component, EventEmitter, Output, OnInit} from 'angular2/core'
import {NgForm}    from 'angular2/common';
import {FilePackage} from './package.component';
import {File} from './file';

declare var $: any;
declare var Dropzone: any;


@Component({
    selector: 'package-new',
    providers: [],
    templateUrl: '/partial/packagenew',
})
export class PackageNewComponent implements OnInit {
    @Output() onNewPackageCreated = new EventEmitter<FilePackage>();
    newPackage: FilePackage;
    submitted: boolean = false;

    constructor() {
        this.newPackage = new FilePackage(0, "", "", []);
        this.newPackage.files = [];
    }

    ngOnInit() {
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
        let p = this.newPackage;
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
                    if (!p.files) p.files = [];
                    p.files.push(new File(fileNum, file.name));
                    var num = fileNum;
                    var selector = "#file" + fileNum;
                    var fileRef = '<div id="file' + fileNum + '">' + file.name + ' <progress max="100" value"0"></progress></div>';
                    $(divDropzone).append(fileRef)
                    fileNum++;

                    setTimeout(function () {
                        $(selector).html('<a href="#">' + file.name + '</a>');
                    }, 1500 + (500 * num));
                });
                this.on("sending", function (file, xhr, formData) {
                        console.log("sending");
                    });
                this.on("removedfile", function (/*file*/) {
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
                this.on("dragleave", function (/*e*/) {
                    hoverCounter--;
                    if (hoverCounter === 0) {
                        $(divDropzone).removeClass("dropzone-hover");
                    }
                });
                this.on("drop", function (e) {
                    hoverCounter--;
                    $(divDropzone).removeClass("dropzone-hover");
                }); // END of ondrop
            }, // END of init:
            thumbnail: function (file, dataUrl) {
                /* Noop.  This disables file preview generation (resized image content for image uploads) */
            },
            paramName: "file",
            url: "/noop",
            previewTemplate: "<div></div>",
            previewsContainer: "#uxPackageDocs",
            clickable: false
        });
    }

    onSubmit() {
        console.log("About to emit")
        console.log("newPackage: ")
        console.log(this.newPackage);
        this.onNewPackageCreated.emit(this.newPackage);
        this.submitted = true;
        console.log(this.newPackage);
    }

}