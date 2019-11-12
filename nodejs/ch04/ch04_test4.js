// calc3 모듈을 참조하여 계산기의 이벤트를 사용해보자

var Calc = require("./calc3");

var calc = new Calc();
calc.emit("stop");

console.log(Calc.title + "에 stop 이벤트 전달함.");
