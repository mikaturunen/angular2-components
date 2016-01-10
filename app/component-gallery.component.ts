///

"use strict";

import { Component } from "angular2/core";

// Start importing all the components we want to use and display in the gallery
import { ButtonDirective } from "./button.directive";

@Component({
    selector: "component-gallery",
    templateUrl: "app/component-gallery.template.html",
    directives: [
        ButtonDirective
    ]
})
export class ComponentGallery {
    public openAlert(message: string) {
        alert(message);
    }
}
