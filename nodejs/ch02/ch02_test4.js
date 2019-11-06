

// calc 라는 빈 객체를 생성한다.
var calc = {};
// calc객체에 add라는 속성을 추가하고 function을 대입한다.
calc.add = function( a, b ) {
	return a + b;
}

console.log("모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d", calc.add( 10, 10 ));
