///

"use strict";

import { Component } from "angular2/core";

// Start importing all the components we want to use and display in the gallery
import { ButtonDirective } from "./button.directive";
import { TreePickerComponent } from "./tree-picker.component";

@Component({
    selector: "component-gallery",
    templateUrl: "app/component-gallery.template.html",
    directives: [
        ButtonDirective,
        TreePickerComponent
    ]
})
export class ComponentGallery {
    public openAlert(message: string) {
        alert(message);
    }

    public test: Object = {
        "sales (10000)": {
            "cars (10001)": {
                "audi (10002)": 1,
                "skoda (10003)": 2
            },
            "foobar (10010)": 3,
            "fooBar (10011)": 4
        },
        "converter (100)": {
            "conversion (101)": 100
        }
    };
}
