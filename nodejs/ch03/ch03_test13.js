// 배열 객체의 속성 메소드를 사용해보자
// delete 키워드 ( 예약어 )

var Users = [ { name : "소녀시대", age : 20 }, { name : "걸스데이", age : 22 }, { name : "티아라", age : 23 } ];
console.log("delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d", Users.length );

// delete키워드로 1번째 index의 요소값을 삭제하면 해당 배열 객체의 2번째 index가 1번째가 되는 것이 아니라 1번째 index 가 비게 된다. 
delete Users[1];
console.log("delete 키워드로 배열 요소 삭제 후" );
console.dir( Users ); 

// 1 번째 매개변수 : index
// 2 번째 매개변수 : remove count
// 3 번째 매개변수 : item
// index에서 remove count만큼 삭제하고, item을 index에 추가한다.
Users.splice( 1, 0, { name : "애프터스쿨", age : 25 } );
console.log("splice()로 요소를 인덱스 1에 추가한 후" );
console.dir( Users );

Users.splice( 2, 1 );
console.log( "splice()로 인덱스 2의 요소를 1개 삭제한 후" );
console.dir( Users );

Users.splice( 2, 1, { name : "hanelso", age : 28 } );
console.log( "splice()로 인덱스 2의 요소를 1개 삭제하고 hanelso객체 추가?" );
console.dir( Users );
