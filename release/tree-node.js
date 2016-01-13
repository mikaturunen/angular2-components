System.register([], function(exports_1) {
    "use strict";
    var TreeNode;
    return {
        setters:[],
        execute: function() {
            TreeNode = (function () {
                function TreeNode(leafs, values) {
                    this.leafs = leafs;
                    this.values = values;
                    this.isExpanded = false;
                }
                TreeNode.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                return TreeNode;
            }());
            exports_1("TreeNode", TreeNode);
        }
    }
});
