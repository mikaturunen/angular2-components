/// <reference path="../definitions/hero.d.ts" />

import { Component } from "angular2/core"

@Component({
    selector: "my-app",
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details.</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div><label>name: </label>{{hero.name}}</div>
    `
})

export class AppComponent {
    public title = "Tour of Heroes";
    public hero: Hero = {
        name: "windstorm",
        id: 1
    };
}
