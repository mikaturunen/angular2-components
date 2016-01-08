/// <reference path="../definitions/hero.d.ts" />

"use strict";

import { Component } from "angular2/core";
import { HeroDetailComponent } from "./hero-detail.component";

@Component({
    selector: "my-app",
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="#hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <div *ngIf="selectedHero">
            <h2>{{selectedHero.name}} details!</h2>
            <div>
                <label>id: </label>{{selectedHero.id}}
            </div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name"/>
            </div>
        </div>
    `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 10em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0em;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #EEE;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0em 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0px 0px 4px;
        }
    `]
})
export class AppComponent {
    public title = "Tour of Heroes";
    public hero: Hero = {
        name: "windstorm",
        id: 1
    };
    public heroes = HEROES;
    public selectedHero: Hero;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}

const HEROES: Hero[] = [
    { id: 11, name: "Mr. T" },
    { id: 12, name: "Dynamo" },
    { id: 13, name: "Mysterio" },
    { id: 14, name: "Kongo" },
    { id: 15, name: "Green Smite" },
    { id: 16, name: "Thor" },
    { id: 19, name: "Executioner" },
    { id: 21, name: "Donkey Kong" },
    { id: 31, name: "Mr. FooBar" },
    { id: 542, name: "DingDong.." }
];
