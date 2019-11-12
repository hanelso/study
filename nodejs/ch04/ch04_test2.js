// event를 지정하고 event를 발생 시켜보다

// "exit" 이라는 이벤트를 지정한다.
process.on("exit", function() {
	console.log("exit 이벤트 발생함.");
});

// setTimeout() 함수를 통해서 2000ms 이후에 콜백이 발생하도록 만든다.
setTimeout( function() {
	console.log("2초 후에 시스템 종료 시도함.");

	process.exit();
}, 2000);
