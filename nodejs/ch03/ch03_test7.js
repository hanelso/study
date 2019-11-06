// 객체를 생성할때 속성값들을 할당하면서 초기화도 할 수 있다.

var Person = {
	age : 20,
	name : "소녀시대",
	add : function( a, b ) {
		return a + b;
	}
};

console.log("더하기 : %d", Person.add(10,10));
