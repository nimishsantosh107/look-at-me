const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const fs = require('fs');
const robot = require("robotjs");
const ioHook = require('iohook');

const publicPath = path.join(__dirname,'../public');
const port = 1000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var sockArr = [];
//CURRENTLY ONLY 2 (y/n)
var swtch = 'Y';
var cur = 0;


//ROUTES
//first route(/)
//FOR WEBSITE THING ONLY
app.use(express.static(publicPath+'/index'));


//IO CONNECTION AND EVENTS
io.on('connection',(socket)=>{
	console.log(`${socket.id} CONNECTED`);
	sockArr.push(socket.id);


//********
	//ONLY FOR SITE(ctrl+shift)
	socket.on('switch',()=>{
		cur+=1;
		if(cur > (sockArr.length)-1){cur = 0;}
	});
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

//RUN SERVER
server.listen(port,'192.168.1.*',()=>{console.log(`SERVER UP ON ${port}`);});