import {Component, OnInit} from "angular2/core";
import {FilePackage} from './package.component';
import {PackageService} from './package.service';
import {PackageListComponent} from './package-list.component';
import {PackageNewComponent} from './package-new.component';

declare var toastr: any;

@Component({
    selector: "cmpoc",
    templateUrl: "/partial/cmpoc",
    directives: [PackageListComponent, PackageNewComponent],
    providers: [PackageService]
})
export class CMPOCComponent implements OnInit {
    

    constructor(private _packageService: PackageService) { }

    ngOnInit() {
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
        }
    }

    pageTitle = 'CM POC';
    packages: FilePackage[];
    addMode: boolean = false;

    getPackages() {
        this.packages = this._packageService.getPackages();
    }

    createPackage() {
        this.addMode = true;
    }

    onNewPackageCreated(newPackage: FilePackage) {
        this.addMode = false;
        this.packages.unshift(newPackage);

        toastr.success("New Package: '" + newPackage.name + "' submitted!")
    }
}