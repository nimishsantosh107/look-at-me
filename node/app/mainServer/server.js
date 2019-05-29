const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const fs = require('fs');
const robot = require("robotjs");
const ioHook = require('iohook');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const PORT = 1000;
const IP = '';
var sockArr = [];

//CURRENTLY ONLY 2 (y/n)
var swtch = 'Y';
var cur = 0;

//IO CONNECTION AND EVENTS
io.on('connection',(socket)=>{
	console.log(`${socket.id} CONNECTED`);
	sockArr.push(socket.id);

//********
	//EMIT ONLY TO CUR
	socket.on('new',(str)=>{
		//the following (io.sockets.connected is an arr of socket ids)
		io.sockets.connected[sockArr[cur]].emit('data',str);
	});
//********

	//DISCONNECTION
	socket.on('disconnect' ,()=>{
		var ind = sockArr.indexOf(socket.id);
		console.log(`${socket.id} DISCONNECTED`);
		sockArr.splice(ind,1);
	});
});

/*
	NEED TO IMPLEMENT
	when log is N set cur to -1 to correspond to current computer
	else when its Y set it to appropriate cur to switch between PCs
*/

// CHECK CAMLOG FOR STATUS
setInterval(()=>{
	fs.readFile('./../python/camlog.txt', (err, data) => { 
		if (err) console.log("ERROR READING camlog.txt");
		else{
			swtch=data.toString();
			
			if(swtch!==''){
				if(swtch==='Y')
					cur=0;
				else if(swtch==='N'){
					if(sockArr.length > 1) cur=1;
					else cur=0;
				}
			}

		}
	});
},500);

//RUN SERVER
server.listen(PORT,IP,()=>{console.log(`SERVER UP ON ${port}`);});