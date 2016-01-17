///

"use strict";

import { Component, OnInit } from "angular2/core";

// Start importing all the components we want to use and display in the gallery
import { TreePickerComponent } from "./tree-picker.component";
import { ButtonExamples } from "./button-examples.component";

@Component({
    selector: "component-gallery",
    templateUrl: "app/component-gallery.template.html",
    directives: [
        TreePickerComponent,
        ButtonExamples
    ]
})
export class ComponentGallery implements OnInit {
    public openAlert(message: string) {
        alert(message);
    }

    public ngOnInit() {
        (<any> window).hljs.initHighlighting();
    }

    public test: Object = {
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
    };
}
