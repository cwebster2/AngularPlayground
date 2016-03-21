System.register(['./file'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var file_1;
    var mockFiles, PACKAGES;
    return {
        setters:[
            function (file_1_1) {
                file_1 = file_1_1;
            }],
        execute: function() {
            mockFiles = [new file_1.File(100, "Some File.pdf"), new file_1.File(101, "Another File.pdf")];
            exports_1("PACKAGES", PACKAGES = [
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
            ]);
        }
    }
});
//# sourceMappingURL=mock-packages.js.map