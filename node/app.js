const electron = require('electron');
const url = require('url');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const ioc = require('socket.io-client');
const path = require('path');
const fs = require('fs');
const robot = require("robotjs");
//const ioHook = require('iohook');
const {app,BrowserWindow} = electron;

const port = 5000;

var appp = express();
var server = http.createServer(appp);
var io = socketIO(server);

let mainWindow;

app.on('ready',()=>{
	server.listen(port,'192.168.1.5',()=>{
		console.log(`SERVER UP ON ${port}`);

		//CONNECT TO MAIN
		var iocc = ioc("http://192.168.1.5:1000");
		iocc.on('connect',()=>{
			console.log('CONNECTED TO MAIN');

			/*MAINMETHODS*/
			mainWindow = new BrowserWindow({});
			// mainWindow.loadURL(url.format({
			// 	pathname: path.join(__dirname,'/appViews/index/index.html'),
			// 	protocol: 'file:',
			// 	slashes: true,
			// }));


			//test recieve data
			iocc.on('data',(str)=>{console.log('str');});
			//DISCONNECTION
			iocc.on('disconnect',()=>{console.log('DISCONNECTED FROM MAIN');})
		});
	});
});