import {Component} from 'angular2/core'
import {FilePackage} from './package.component'

@Component({
    selector: 'package-detail',
    providers: [],
    templateUrl: '/partial/packagedetail',
    inputs: ['filepackage']
})
export class PackageDetailComponent {
    filepackage: FilePackage;

    openDoc() {
        alert("Open doc");
        return false;
    }
}