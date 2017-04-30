var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
};

var handlers = {

    'Hello': function () {
        this.emit(':tell', 'Hello there!');
    }

};
