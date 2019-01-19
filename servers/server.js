const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var sockArr = [];
var cur = 0;

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
	sockArr.push(socket.id);

	socket.on('switch',()=>{
		cur+=1;
		if(cur > (sockArr.length)-1){cur = 0;}
	});
	
	socket.on('new',(str)=>{
		io.sockets.connected[sockArr[cur]].emit('data',str);
		//socket.broadcast.emit('data',str)
	});

	socket.on('disconnect' ,()=>{
		var ind = sockArr.indexOf(socket.id);
		sockArr.splice(ind,1);
	});
});

server.listen(port,'192.168.1.10',()=>{console.log(`SERVER UP ON ${port}`);});