//TEST FILE TO TEST CONCEPTS
const fs = require('fs');

setInterval(()=>{
	fs.readFile('python/camlog.txt', (err, data) => { 
		if (err) console.log("ERR");
		else{
			var x = data.toString();
			if(x!=='')
				console.log(x);
		}
	});
},500);

// setInterval(()=>{
// 	fs.readFile('python/camlog.txt', (err, data) => { 
// 		if (err) console.log("ERR");
// 		else{
// 			swtch=data.toString();
// 			if(swtch!==''){
// 				if(swtch==='Y'){
// 					console.log(swtch)
// 					cur=0;
// 				}
// 				else if(swtch==='N'){
// 					console.log(swtch)
// 					cur=1;
// 				}
// 			}
// 		}
// 	});
// },500);