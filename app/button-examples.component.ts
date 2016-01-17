"use strict";

import { Component } from "angular2/core";

import { ButtonDirective } from "./button.directive";

/**
 * ButtonExamples component that aims to contain all the buttons and use examples for them.
 */
@Component({
    selector: "button-examples",
    templateUrl: "app/button-gallery.template.html",
    directives: [
        ButtonDirective
    ]
})
export class ButtonExamples {

}
