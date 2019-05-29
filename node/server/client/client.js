const express = require('express');
const socketIO = require('socket.io');
const ioc = require('socket.io-client');
const robot = require("robotjs");
const ioHook = require('iohook');

var app = express();

var IP = '';

app.listen(4000,()=>{
	console.log('SERVER UP ON PORT 5000');

	var iocc = ioc(`http://${IP}:3000`);
	iocc.on('connect',()=>{
		console.log('CONNECTED TO MAIN');


		/*MAINMETHODS*/


	});
});