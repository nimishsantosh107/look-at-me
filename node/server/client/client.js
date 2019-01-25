const express = require('express');
const socketIO = require('socket.io');
const ioc = require('socket.io-client');
const robot = require("robotjs");
const ioHook = require('iohook');

var app = express();

app.listen(5000,()=>{
	console.log('SERVER UP ON PORT 5000');

	var io = ioc("http://192.168.1.8:3000");
	io.on('connect',()=>{
		console.log('CONNECTED TO MAIN');


		/*MAINMETHODS*/


	});

});