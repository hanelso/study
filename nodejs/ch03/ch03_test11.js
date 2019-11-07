// 배열의 속성 메소드를 사용해보자
// push(), pop()

// 배열 객체 생성 및 초기화
var Users = [ { name : "소녀시대", age : 20 }, { name : "걸스데이", age : 22 } ];
console.log("push() 호출 전 배열 요소의 수 : %d", Users.length );

// 배열의 끝에 새로운 객체 요소 추가
Users.push( { name : "티아라", age : 23 } );
console.log("push() 호출 후 배열 요소의 수 : %d", Users.length );

// 배열의 끝에 있는 요소 제거
Users.pop();
console.log( "pop() 호출 후 배열 요소의 수 : %d", Users.length );
