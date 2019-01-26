const express = require('express');
const socketIO = require('socket.io');
const ioc = require('socket.io-client');
const robot = require("robotjs");
const ioHook = require('iohook');

var app = express();

app.listen(5000,()=>{
	console.log('SERVER UP ON PORT 5000');

	var iocc = ioc("http://192.168.1.5:3000");
	iocc.on('connect',()=>{
		console.log('CONNECTED TO MAIN');


		/*MAINMETHODS*/


	});
});