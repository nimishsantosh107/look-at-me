const robot = require("robotjs");
const ioHook = require('iohook');
const HID = require('node-hid');

//HID FOR MOUSE INPUT
	// var devices = HID.devices();
	// console.log(devices);
	// var mouseInfo = devices.find((d)=>{
	//     var mouseUSB = d.vendorId===7247 && d.productId===3;  //zebronics usb mouse
	//     return mouseUSB;
	// });
	// //console.log(mouse)
	// var mouse = new HID.HID( mouseInfo.path );
	// mouse.on("data", function(data) {
	// 	console.log(data.toString('hex'))
	// });

/*IOHOOK*/
	// ioHook.on('mousemove', (event) => {
	//   	console.log(event); // { type: 'mousemove', x: 700, y: 400 }
	// 	});
	// ioHook.start();

/*ROBOT*/
	// Speed up the mouse.
	// robot.setMouseDelay(2); 
	// var twoPI = Math.PI * 2.0;
	// var screenSize = robot.getScreenSize();
	// var height = (screenSize.height / 2) - 10;
	// var width = screenSize.width;
	 
	// for (var x = 0; x < width; x++)
	// {
	//     y = height * Math.sin((twoPI * x) / width) + height;
	//     robot.moveMouse(x, y);
	// }