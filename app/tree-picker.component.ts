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
        console.log("changed:", changes);
        TreePickerComponent.buildTree(this.json);
    }

    public static buildTree(json: Object, key: string = "", recursion: number = 0) {
        const keys = Object.keys(json);
        if (keys.length > 0) {
            // we have children, create UL
            const tabs = new Array(recursion).join(" ");
            console.log(tabs, "UL:", key);
            keys.forEach(key => TreePickerComponent.buildTree(json[key], key, (recursion + 4)));
            console.log(tabs, "/UL:", key);
        } else {
            console.log(new Array(recursion).join(" "), "li [", key, "]:", json);
        }
    }
}
