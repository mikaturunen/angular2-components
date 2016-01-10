"use strict";

import { Directive, ElementRef, Renderer, Input } from "angular2/core";

@Directive({
    selector: "[primaryButton]"
})
export class ButtonDirective {
    constructor(private element: ElementRef, private renderer: Renderer) {
        this.renderer.setElementClass(this.element.nativeElement, "primary-button", true);
    }
}
