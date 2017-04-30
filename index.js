'use strict';
var Alexa = require("alexa-sdk");
var text = require("./src/text.json");
var Speech = require('ssml-builder');

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
        var res = buildResponse();
        this.emit(':tell', res);
    }
};

function buildResponse() {
    var speech = new Speech();
    speech.say(text.start);
    speech.audio("https://d10.at/TinyCareAlexa/whitenoiseAlexa20.mp3");
    var speechOutput = speech.ssml(true);
    return speechOutput;
}