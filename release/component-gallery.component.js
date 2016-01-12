///
System.register(["angular2/core", "./button.directive", "./tree-picker.component"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, button_directive_1, tree_picker_component_1;
    var ComponentGallery;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_directive_1_1) {
                button_directive_1 = button_directive_1_1;
            },
            function (tree_picker_component_1_1) {
                tree_picker_component_1 = tree_picker_component_1_1;
            }],
        execute: function() {
            ComponentGallery = (function () {
                function ComponentGallery() {
                    this.test = {
                        "sales (10000)": {
                            "cars (10001)": {
                                "audi (10002)": 1,
                                "skoda (10003)": 2
                            },
                            "foobar (10010)": 3,
                            "fooBar (10011)": 4
                        },
                        "converter (100)": {
                            "conversion (101)": 100
                        }
                    };
                }
                ComponentGallery.prototype.openAlert = function (message) {
                    alert(message);
                };
                ComponentGallery = __decorate([
                    core_1.Component({
                        selector: "component-gallery",
                        templateUrl: "app/component-gallery.template.html",
                        directives: [
                            button_directive_1.ButtonDirective,
                            tree_picker_component_1.TreePickerComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ComponentGallery);
                return ComponentGallery;
            }());
            exports_1("ComponentGallery", ComponentGallery);
        }
    }
});
