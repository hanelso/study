// 직접 event를 만들고 사용해보자

// "tick"이라는 이름으로 콜백함수를 등록해둔다.
process.on( "tick", function( count ) {
	console.log( "tick 이벤트 발생함 : %s", count );
});

// 2000ms 이후에 콜백이 발생하면서 process의 "tick"이라는 이름의 이벤트를 emit()하여 매개변수로 "2"를 넘겨준다.
setTimeout( function() {
	console.log("2초 후에 tick 이벤트 전달 시도함.");

	process.emit("tick", "2");
}, 2000);
