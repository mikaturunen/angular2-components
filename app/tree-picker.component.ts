"use strict";

import { Component, View, OnChanges } from "angular2/core";
import { NgIf, NgFor } from "angular2/common";

import { TreeNode } from "./tree-node";

@Component({
    selector: "tree-picker",
    inputs: [ "json" ]
})
@View({
    templateUrl: "app/tree-picker.html",
    directives: [
        NgFor,
        TreePickerComponent,
        NgIf
    ]
})
export class TreePickerComponent implements OnChanges {
    /**
     * The user specified JSON object that gets expanded into Tree with leafs.
     */
    public json: Object;

    /**
     * Tree that is expanded into view and made selectable.
     */
    private tree: TreeNode[] = [];

    ngOnChanges(changes: { [ propName: string ]: any }) {
        TreePickerComponent.debugBuildTree(this.json);
        this.tree = [ new TreeNode() ];

        this.buildTree(this.json, this.tree[0].leafs, this.tree[0].values);
        console.log(this.tree);
    }

    public buildTree(
            json: Object,
            leafs: TreeNode[],
            values: string[],
            key: string = ""
        ) {

        const keys = Object.keys(json);

        if (keys.length > 0) {
            const newLeafs = [];
            const newValues = [];
            // Create a new leaf and include the potential
            leafs.push(new TreeNode(newLeafs, newValues));
            keys.forEach(key => this.buildTree(json[key], newLeafs, newValues, key));
        } else {
            values.push(key);
        }
    }

    public static debugBuildTree(json: Object, key: string = "", recursion: number = 0) {
        const keys = Object.keys(json);
        if (keys.length > 0) {
            // we have children, create UL
            const tabs = new Array(recursion).join(" ");
            console.log(tabs, "UL:", key);
            keys.forEach(key => TreePickerComponent.debugBuildTree(json[key], key, (recursion + 4)));
            console.log(tabs, "/UL:", key);
        } else {
            console.log(new Array(recursion).join(" "), "li [", key, "]:", json);
        }
    }
}
