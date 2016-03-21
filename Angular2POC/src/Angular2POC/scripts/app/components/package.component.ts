import {File} from './file';

export class FilePackage {

    constructor(
        public id: number,
        public name: string,
        public caseReference: string,
        public files: File[]
    ) {
    }

}