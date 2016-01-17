System.register(["angular2/core", "angular2/common", "./tree-node"], function(exports_1) {
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
    var core_1, common_1, tree_node_1;
    var TreePickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (tree_node_1_1) {
                tree_node_1 = tree_node_1_1;
            }],
        execute: function() {
            TreePickerComponent = (function () {
                function TreePickerComponent() {
                    /**
                     * Tree that is expanded into view and made selectable.
                     */
                    this.tree = [];
                }
                TreePickerComponent.prototype.ngOnChanges = function (changes) {
                    if (!changes["json"]) {
                        console.log("Not json change: ", changes);
                        return;
                    }
                    TreePickerComponent.debugBuildTree(this.json);
                    this.tree = [new tree_node_1.TreeNode()];
                    this.buildTree(this.json, this.tree[0].leafs, this.tree[0].values);
                    console.log(this.tree);
                };
                TreePickerComponent.prototype.buildTree = function (json, leafs, values, key) {
                    var _this = this;
                    if (key === void 0) { key = ""; }
                    var keys = Object.keys(json);
                    if (keys.length > 0) {
                        var newLeafs = [];
                        var newValues = [];
                        // Create a new leaf and include the potential
                        leafs.push(new tree_node_1.TreeNode(newLeafs, newValues));
                        keys.forEach(function (key) { return _this.buildTree(json[key], newLeafs, newValues, key); });
                    }
                    else {
                        values.push(key);
                    }
                };
                TreePickerComponent.debugBuildTree = function (json, key, recursion) {
                    if (key === void 0) { key = ""; }
                    if (recursion === void 0) { recursion = 0; }
                    var keys = Object.keys(json);
                    if (keys.length > 0) {
                        // we have children, create UL
                        var tabs = new Array(recursion).join(" ");
                        console.log(tabs, "UL:", key);
                        keys.forEach(function (key) { return TreePickerComponent.debugBuildTree(json[key], key, (recursion + 4)); });
                        console.log(tabs, "/UL:", key);
                    }
                    else {
                        console.log(new Array(recursion).join(" "), "li [", key, "]:", json);
                    }
                };
                TreePickerComponent = __decorate([
                    core_1.Component({
                        selector: "tree-picker",
                        inputs: ["json", "tree"]
                    }),
                    core_1.View({
                        templateUrl: "app/tree-picker.html",
                        directives: [
                            common_1.NgFor,
                            TreePickerComponent,
                            common_1.NgIf
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TreePickerComponent);
                return TreePickerComponent;
            }());
            exports_1("TreePickerComponent", TreePickerComponent);
        }
    }
});
