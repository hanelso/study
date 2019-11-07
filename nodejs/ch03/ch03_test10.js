

var Users = [ { name : "소녀시대", age : 20 }, { name : "걸스데이", age : 22 }, { name : "티아라", age : 23 } ];

console.log("배열 요소의 수 : %d", Users.length );

// Users배열의 0 ~ Users.length index에 접근하며 각 요소 객체의 name의 값을 확인한다.
for ( var i = 0; i < Users.length; i++ )
{
	console.log("배열 요소 #" + i + " : %s", Users[i].name );
}

console.log("\nforEach 구문 사용하기" );

// forEach() 메소드를 사용해서 해당 객체의 요소값을 item으로 접근하고 해당하는 index를 index변수에 할당된다.
// 여기서 item과 index의 순서를 헷갈리면 안된다.
Users.forEach( function( item, index ) {
	console.log( "배열 요소 #" + index + " : %s", item.name );
} );


