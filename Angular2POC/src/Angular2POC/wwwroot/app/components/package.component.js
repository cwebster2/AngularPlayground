System.register([], function(exports_1) {
    var FilePackage;
    return {
        setters:[],
        execute: function() {
            FilePackage = (function () {
                function FilePackage(id, name, caseReference, files) {
                    this.id = id;
                    this.name = name;
                    this.caseReference = caseReference;
                    this.files = files;
                }
                return FilePackage;
            })();
            exports_1("FilePackage", FilePackage);
        }
    }
});
//# sourceMappingURL=package.component.js.map