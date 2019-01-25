const electron = require('electron');
const url = require('url');
const path = require('path');
const {app,BrowserWindow} = electron;

let mainWindow;

app.on('ready',()=>{
	mainWindow = new BrowserWindow({});

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname,'/appViews/index/index.html'),
		protocol: 'file:',
		slashes: true,
	}));
});