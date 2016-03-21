import {FilePackage} from './package.component';
import {File} from './file';

var mockFiles = [new File(100, "Some File.pdf"), new File(101, "Another File.pdf")];

export var PACKAGES: FilePackage[] = [
    { "id": 1, "name": "Hello World!", "caseReference": "12345-US-NP", "files": mockFiles },
    { "id": 2, "name": "Case 2 Docs", "caseReference": "54321-US-NP", "files": mockFiles },
    { "id": 3, "name": "Some Files", "caseReference": "19287-US-NP", "files": mockFiles },
    { "id": 4, "name": "Stuff", "caseReference": "11111-US-NP", "files": mockFiles },
    { "id": 5, "name": "Here take this", "caseReference": "22222-US-NP", "files": mockFiles },
    { "id": 6, "name": "Found these lying around", "caseReference": "99999-US-NP", "files": mockFiles },
    { "id": 7, "name": "Last one", "caseReference": "65432-US-NP", "files": mockFiles },
    { "id": 8, "name": "I promise", "caseReference": "78675-US-NP", "files": mockFiles },
    { "id": 9, "name": "Last last one", "caseReference": "11223-US-NP", "files": mockFiles },
    { "id": 10, "name": "The end", "caseReference": "14235-US-NP", "files": mockFiles }
];