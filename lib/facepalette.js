define(["widepalette",
        "text!facepalette.html"], function (palette, template) {

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
		
		var eyevalue = document.getElementById("eyevalue");
		eyevalue.min = 1;
		eyevalue.max = 5;
		eyevalue.value = document.getElementById('numeyes').innerHTML;
		eyevalue.onclick = function() {
            document.getElementById('numeyes').innerHTML = eyevalue.value;
        }

    };

    activitypalette.ActivityPalette.prototype =
        Object.create(palette.Palette.prototype, {
            setTitleDescription: {
                value: "Face Palette:",
                enumerable: true,
                configurable: true,
                writable: true
            }
        });

    return activitypalette;
});
