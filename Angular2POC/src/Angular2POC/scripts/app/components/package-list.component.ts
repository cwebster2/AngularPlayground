//our root app component
import {Component} from 'angular2/core'
import {FilePackage} from './package.component';
import {PackageDetailComponent} from './package-detail.component';

@Component({
    selector: 'package-list',
    templateUrl: 'src/package-list.html',
    directives: [PackageDetailComponent],
    inputs: ['packages']
})
export class PackageListComponent {
    packages: FilePackage[];
    selectedPackage: FilePackage;

    onSelect(mypackage: FilePackage) {
        this.selectedPackage = mypackage;
    }
}