define(["sugar-web/graphics/numeyespalettetemplate",
        "text!sugar-web/graphics/numeyespalette.html"], function (palette, template) {

    'use strict';

    var activitypalette = {};

    activitypalette.ActivityPalette = function (activityButton,
        datastoreObject) {

        palette.Palette.call(this, activityButton);

        var activityTitle;
        var descriptionLabel;
        var descriptionBox;

        this.getPalette().id = "activity-palette";

        var containerElem = document.createElement('div');
        containerElem.innerHTML = template;
        this.setContent([containerElem]);

        this.numberSelected1 = containerElem.querySelector('#n1');
        this.numberSelected2 = containerElem.querySelector('#n2');
        this.numberSelected3 = containerElem.querySelector('#n3');
        this.numberSelected4 = containerElem.querySelector('#n4');
        this.numberSelected5 = containerElem.querySelector('#n5');

        this.numberSelected1.onclick = function() {
            document.getElementById('numeyes').innerHTML = "1";
        }
        this.numberSelected2.onclick = function() {
            document.getElementById('numeyes').innerHTML = "2";
        }
        this.numberSelected3.onclick = function() {
            document.getElementById('numeyes').innerHTML = "3";
        }
        this.numberSelected4.onclick = function() {
            document.getElementById('numeyes').innerHTML = "4";
        }
        this.numberSelected5.onclick = function() {
            document.getElementById('numeyes').innerHTML = "5";
        }

    };

    activitypalette.ActivityPalette.prototype =
        Object.create(palette.Palette.prototype, {
            setTitleDescription: {
                value: "Eyes Number:",
                enumerable: true,
                configurable: true,
                writable: true
            }
        });

    return activitypalette;
});
