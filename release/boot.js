System.register(["angular2/platform/browser", "./gallery.component"], function(exports_1) {
    var browser_1, gallery_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (gallery_component_1_1) {
                gallery_component_1 = gallery_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(gallery_component_1.GalleryComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map