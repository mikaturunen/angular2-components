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
        this.buildTree(this.json, []);
    }

    private buildTree(json: Object, structure: Object, key: string = "") {
        const keys = Object.keys(json);

        if (keys.length > 0) {
            // We need to create UL elements from this branch spot


            keys.forEach(k => this.buildTree(json[k], k));
        } else {
            // We are in the specific leaf, with values in our hand and key containing the property name

        }

        const leafs = [];

        console.log(key, keys, json);

    }
}
