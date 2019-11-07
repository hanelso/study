// 콜백함수를 사용해 보자
// 함수 내부에서 함수를 return 한다.

// add라는 함수를 정의하면서 함수내부에 history라는 변수를 선언하고 함수를 익명함수를 할당하고, history를 반환한다.
function add ( a, b, callback ) {
	var result = a + b;
	callback( result );

	var history = function() {
		return a + " + " + b + " = " + result;
	};

	return history;
}

// add_history라는 변수에 add함수의 결과값( add함수의 history )을 대입한다.
var add_history = add( 10, 10, function( result ) {
	console.log("파라미터로 전달된 콜백 함수 호출됨.");
	console.log("더하기 ( 10, 10 )의 결과 : %d", result );
} );

// add_history( add함수에서 반환한 history에 할당된 함수 )를 호출한다.
console.log("결과 값으로 받은 함수 실행 결과 : " + add_history() );
