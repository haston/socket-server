//client.js
var io = require('socket.io-client');
var socket = io.connect('http://0.0.0.0:8080', {reconnect: true});

var room ="room2";
// Add a connect listener
socket.on('connect', function () {
    console.log('Connected!');
    socket.emit('JOIN', room);
});

socket.on(room, function (data) {
    console.log('room: data from server : ', data)
})

socket.on('data', function (data) {
    console.log('data: data from server : ', data)
})

//
// socket.emit('CH01', room, 'test msg');
socket.emit('room', room, 'Welcome to ' + room);
