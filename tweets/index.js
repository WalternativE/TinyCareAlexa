'use strict';
var Twitter = require('twitter');

var tweets = function(handleData) {

    var client = new Twitter({
    consumer_key: 'HZFbM4ZlmhSlgnTRnn6N7zPBo',
    consumer_secret: 'Gifl2vAu6UIKXwy9BIp9BxXrNuSo3FlsM9PSu0hz7uYSEJcQPY',
    access_token_key: '2649577181-MohPzbtGI6b0AXWYfnvO7ATHaZq0HaSev1TFLMK',
    access_token_secret: 'U7aOBmhMNVRfb8fR6MNZLDnBGLXixsss4BXfei8d4Ijjp'
    });
    
    client.stream('user', {}, function(stream) {

        stream.on('data', function(data) {
            console.log(data);
            handleData(data);
        });

    });
}

module.exports = tweets;