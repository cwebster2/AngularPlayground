import {PACKAGES} from './mock-packages';
import {Injectable} from 'angular2/core';

@Injectable()
export class PackageService {
    getPackages() {
        return PACKAGES;
    }
}
