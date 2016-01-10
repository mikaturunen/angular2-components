System.register(["angular2/core"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Button;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Button = (function () {
                function Button() {
                }
                Button.prototype.test = function () {
                    this.onCLick();
                };
                __decorate([
                    core_1.Input("on-click"), 
                    __metadata('design:type', Function)
                ], Button.prototype, "onCLick", void 0);
                Button = __decorate([
                    core_1.Component({
                        selector: "slim-button",
                        templateUrl: "app/button.template.html",
                        styles: [
                            "button {\n            min-width: 10em;\n        }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Button);
                return Button;
            }());
            exports_1("Button", Button);
        }
    }
});
