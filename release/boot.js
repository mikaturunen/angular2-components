System.register(["angular2/platform/browser", "./component-gallery.component"], function(exports_1) {
    "use strict";
    var browser_1, component_gallery_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (component_gallery_component_1_1) {
                component_gallery_component_1 = component_gallery_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(component_gallery_component_1.ComponentGallery);
        }
    }
});
