/// <reference path="../definitions/hero.d.ts" />

import { Component } from "angular2/core"

@Component({
    selector: "my-app",
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details.</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label for="name">name: </label>
            <div><input name="name" id="name" [(ngModel)]="hero.name" placeholder="name" /></div>
        </div>
    `
})

export class AppComponent {
    public title = "Tour of Heroes"
    public hero: Hero = {
        name: "windstorm",
        id: 1
    }
}
