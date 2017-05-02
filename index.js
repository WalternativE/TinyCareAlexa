'use strict';
var Alexa = require("alexa-sdk");
var text = require("./src/text.json");
var Speech = require('ssml-builder');
var moment = require('moment');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'Greeting': function () {
        this.emit('SayHello')
    },
    'SayHello': function () {
        this.emit(':ask', text.greeting);
    },
    'StartWork': function () {
        var intentObj = this.event.request.intent;
        var duration = moment.duration(intentObj.slots.Duration.value).humanize();
        var res = buildResponse(duration);
        this.emit(':tell', res);
    }
};

function buildResponse(duration) {
    var speech = new Speech();
    speech.say(text.start.replace(/{N}/g, duration));
    for(var tweet of text.tweets) {
        speech.audio("https://d10.at/TinyCareAlexa/whitenoiseAlexa10.mp3");
        speech.say(tweet);
        speech.pause('3s');
    }
    var speechOutput = speech.ssml(true);
    return speechOutput;
}