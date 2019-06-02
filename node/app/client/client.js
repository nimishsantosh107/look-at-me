const express = require('express');
const ioc = require('socket.io-client');
const robot = require("robotjs");

var app = express();

var IP = '192.168.0.13';

app.listen(4000,()=>{
	console.log('SERVER UP ON PORT 4000');

	var iocc = ioc(`http://${IP}:3000`);
	iocc.on('connect',()=>{
		console.log('CONNECTED TO MAIN');

		/*MAINMETHODS*/
		iocc.on('data',(obj)=>{
			robot.moveMouse(obj.x, obj.y);
		});

	});
});