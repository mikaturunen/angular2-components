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
        TreePickerComponent.debugBuildTree(this.json);
        /*

            "sales (10000)": {
                "cars (10001)": {
                    "audi (10002)": 1,
                    "skoda (10100)": {
                        "type 1 (10101)": 321,
                        "type 2 (10102)": 231
                    }
                },
                "foobar (10010)": 3,
                "fooBar (10011)": 4
            },
            "converter (100)": {
                "conversion (101)": 100
            },
            "pipe (1)": 10

        */

        this.tree = [
            new TreeNode([

                ],
                [ "sales (10000)" ]
            ),
            new TreeNode([

                ],
                [ "converter (100)" ]
            ),
            new TreeNode([], [ "pipe (1)" ])
        ]
    }

    // public static buildTree(json: Object, tree:)

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
