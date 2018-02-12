//client.js
var io = require('socket.io-client');
var socket = io.connect('http://172.16.0.99:8080', {reconnect: true});

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
});
socket.emit('CH01', 'javsacript client', 'test msg');