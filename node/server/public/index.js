var socket = io();

const codeArea = document.querySelector("#code")
const inpArea = document.querySelector("#inp")

//LEFT SHIFT AND LEFT CONTROL(MAC)
document.onkeyup = function(e) {
	if (e.shiftKey && e.which == 17) {
		socket.emit('switch');
	}
}

inpArea.addEventListener("input", function (e) {
	socket.emit('new',e.target.value);
});

socket.on('data' , function (str) {
	codeArea.value = str;
});