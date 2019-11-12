// 계산기 모듈을 만들어보자! 이벤트를 적절히 사용해보자

var util = require("util");
// events 모듈 내부에 있는 EventEmitter 객체를 참조한다.
var EventEmitter = require("events").EventEmitter;

// Calc에는 function()을 이용하여 prototype 객체를 만든다.
// 객체 내부에서 this 예약어를 사용하여 객체 스스로를 가리킬수 있다.
// this.on()을 통해 "stop"이라는 이름으로 콜백함수를 실행시키는 이벤트를 등록한다.
var Calc = function() {
	var self = this;

	this.on("stop", function() {
		console.log("Calc에 stop event 전달됨.");
	});
};

// js에서 util.inherits()를 이용하여 상속을 할 수 있다.
// Calc에 EventEmitter를 상속한다.( Calc가 상속 받는것이다. )
util.inherits(Calc, EventEmitter );

// Calc의 프로토타입에 add라는 함수를 등록하여 인스턴스를 생성할때 받을 수 있도록 한다.
Calc.prototype.add = function( a, b ) {
	return a + b;
};

// module.exports를 통해서 외부로 통하게 해준다.
module.exports = Calc;
module.exports.title = "calculator";
