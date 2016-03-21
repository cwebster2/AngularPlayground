﻿import {Component} from 'angular2/core'
import {FilePackage} from './package.component'

@Component({
    selector: 'package-detail',
    providers: [],
    templateUrl: 'src/package-detail.html',
    inputs: ['package']
})
export class PackageDetailComponent {
    package: FilePackage;

    openDoc() {
        alert("Open doc");
        return false;
    }
}