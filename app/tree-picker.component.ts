"use strict";

import { Component } from "angular2/core";

@Component({
    selector: "tree-picker",
    template: `
        <div *ngIf="json">
            <span (click)="test()">Tree:</span>
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
        console.log(this.json);
    }
}
