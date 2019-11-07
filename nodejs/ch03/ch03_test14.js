// 배열 객체의 속성 메소드를 사용해보자
// slice()

var Users = [ { name : "소녀시대", age : 20 }, { name : "걸스데이", age : 22 }, { name : "티아라", age : 23 }, { name : "애프터스쿨", age : 25 } ];

console.log("배열 요소의 수 : %d", Users.length );
console.log("원본 Users");
console.dir( Users );

// Users 배열객체에서 1부터 3까지의 요소 복사
// 따라서 3을 제외한 1번 index와 2번 index가 복사된다. 
var Users2 = Users.slice( 1, 3 )

console.log("slice()로 잘라낸 후 Users2" );
console.dir( Users2 );

// Users2객체에서 1번째 요소를 복사
var Users3 = Users2.slice(1);

console.log("slice()로 잘라낸 후 Users3" );
console.dir( Users3 );
