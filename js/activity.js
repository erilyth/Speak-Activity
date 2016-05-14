define(function (require) {
    var activity = require("sugar-web/activity/activity");

    require("activity/SpeakActivity");
    require("activity/sax");
    require("activity/dom-js");
    require("activity/AIMLInterpreter");
    require("activity/Speech");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        var speakActivity = SpeakActivity();
        speakActivity.init();

    });

});
