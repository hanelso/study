// 콜백 함수를 사용해보자

// add라는 함수는 callback이라는 매개변수를 받고, callback으로 인자 (result)를 넣어 함수 호출을 한다.
function add( a, b, callback ) {
	var result = a + b;
	callback( result );
}

// add 라는 함수의 callback 매개변수( 함수가 오는 )에 익명 함수를 정의하여 넣어준다.
// 이렇게 넣어주면 callback이라는 매개변수에 익명함수가 대입되며, 위의 callback( result )를 실행할 수 있게된다.
add( 10, 10, function( result ) {
	console.log("파라미터로 전달된 콜백 함수 호출됨.");
	console.log("더하기 ( 10, 10 )의 결과 : %d", result );
} );
