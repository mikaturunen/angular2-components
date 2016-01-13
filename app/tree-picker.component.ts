"use strict";

import { Component } from "angular2/core";

@Component({
    selector: "tree-picker",
    template: `
        <div *ngIf="json">
            <span (click)="test()">Tree:</span>
            <div>

            </div>
        </div>
    `,
    inputs: [ "json" ]
})
export class TreePickerComponent {
    /**
     * Specific JSON object that is displayd as a "tree" to navigate through.
     */
    public json: Object;

    public test() {
        this.buildTree(this.json);
    }

    public buildTreeLists() {

    }

    private buildTree(json: Object, structure: Object[][] = [], key: string = "", recursion: number = 0) {
        const keys = Object.keys(json);
        if (keys.length > 0) {
            // we have children, create UL
            const tabs = new Array(recursion).join(" ");
            console.log(tabs, "UL:", key);
            keys.forEach(key => this.buildTree(json[key], structure, key, (recursion + 4)));
            console.log(tabs, "/UL:", key);
        } else {
            console.log(new Array(recursion).join(" "), "li [", key, "]:", json);
        }
    }
}
