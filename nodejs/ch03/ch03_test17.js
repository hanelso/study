// 콜백 함수를 사용하고 이해하자

// add라는 함수 내부에 history라는 함수를 정의하고, add함수의 로컬 변수 count를 1씩 증가시키는 로직을 넣었다.
function add( a, b, callback ) {
	var result = a + b;
	callback( result );

	var count = 0;
	var history = function() {
		count ++;
		return count + " : " + a + " + " + b + " = " + result;
	};
	return history;
}

// add_history에 add 함수의 결과값( add함수 내부의 함수 history )을 할당한다.
var add_history = add( 10, 10, function( result ) {
	console.log("파라미터로 전달된 콜백 함수 호출됨.");
	console.log("더하기 ( 10, 10 )의 결과 : %d", result );
} );

// 여기가 중요!!!!
// add_history를 호출하는데 호출을 할때마다 history함수의 로직에 의해서 count가 1씩 증가한다. 하지만 add함수 내부가 아니기 때문에 add의 로컬 변수로는 접근이 되지않는 상태이다. 그럼에도 js에서는 이러한 상황을 접근을 허용하는데 이를 클로져라고 한다.
console.log("결과 값으로 받은 함수 실행 결과 : " + add_history());
console.log("결과 값으로 받은 함수 실행 결과 : " + add_history());
console.log("결과 값으로 받은 함수 실행 결과 : " + add_history());

	
