System.register([], function(exports_1) {
    "use strict";
    var HEROES;
    return {
        setters:[],
        execute: function() {
            /// <reference path="../definitions/hero.d.ts" />
            exports_1("HEROES", HEROES = [
                { id: 11, name: "Mr. T" },
                { id: 12, name: "Dynamo" },
                { id: 13, name: "Mysterio" },
                { id: 14, name: "Kongo" },
                { id: 15, name: "Green Smite " },
                { id: 16, name: "Thor" },
                { id: 19, name: "Executioner" },
                { id: 21, name: " Donkey Kong" },
                { id: 31, name: "Mr. FooBar" },
                { id: 5432, name: " DingDong.." }
            ]);
        }
    }
});
