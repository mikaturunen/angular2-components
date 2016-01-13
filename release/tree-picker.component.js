System.register(["angular2/core"], function(exports_1) {
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
    var core_1;
    var TreePickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TreePickerComponent = (function () {
                function TreePickerComponent() {
                }
                TreePickerComponent.prototype.test = function () {
                    this.buildTree(this.json);
                };
                TreePickerComponent.prototype.buildTreeLists = function () {
                };
                TreePickerComponent.prototype.buildTree = function (json, structure, key, recursion) {
                    var _this = this;
                    if (structure === void 0) { structure = []; }
                    if (key === void 0) { key = ""; }
                    if (recursion === void 0) { recursion = 0; }
                    var keys = Object.keys(json);
                    if (keys.length > 0) {
                        // we have children, create UL
                        var tabs = new Array(recursion).join(" ");
                        console.log(tabs, "UL:", key);
                        keys.forEach(function (key) { return _this.buildTree(json[key], structure, key, (recursion + 4)); });
                        console.log(tabs, "/UL:", key);
                    }
                    else {
                        console.log(new Array(recursion).join(" "), "li [", key, "]:", json);
                    }
                };
                TreePickerComponent = __decorate([
                    core_1.Component({
                        selector: "tree-picker",
                        template: "\n        <div *ngIf=\"json\">\n            <span (click)=\"test()\">Tree:</span>\n            <div>\n\n            </div>\n        </div>\n    ",
                        inputs: ["json"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TreePickerComponent);
                return TreePickerComponent;
            }());
            exports_1("TreePickerComponent", TreePickerComponent);
        }
    }
});
