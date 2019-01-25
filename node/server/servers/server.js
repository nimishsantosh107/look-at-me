const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const fs = require('fs');
//const robot = require("robotjs");
//const ioHook = require('iohook');
//const { execFile } = require('child_process');
//const { spawn } = require('child_process');

const publicPath = path.join(__dirname,'../public');
const port = 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var sockArr = [];
var swtch = 'Y';
var cur = 0;


//ROUTES
//first route(/)
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
	sockArr.push(socket.id);

	socket.on('switch',()=>{
		cur+=1;
		if(cur > (sockArr.length)-1){cur = 0;}
	});
	
	socket.on('new',(str)=>{
		io.sockets.connected[sockArr[cur]].emit('data',str);
	});

	socket.on('disconnect' ,()=>{
		var ind = sockArr.indexOf(socket.id);
		sockArr.splice(ind,1);
	});
});


// CHECK CAMLOG FOR STATUS
// when active disables socket 'switch'
setInterval(()=>{
	fs.readFile('./../python/camlog.txt', (err, data) => { 
		if (err) console.log("ERROR READING camlog.txt");
		else{
			swtch=data.toString();
			if(swtch!==''){
				if(swtch==='Y')
					cur=0;
				else if(swtch==='N'){
					if(sockArr.length > 1)
						cur=1;
					else cur=0;
				}
			}
		}
	});
},500);

//Run server
server.listen(port,'192.168.1.8',()=>{console.log(`SERVER UP ON ${port}`);});