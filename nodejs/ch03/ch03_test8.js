// 배열 객체를 생성하고 배열 요소에 객체를 다뤄본다.

// 배열 객체 생성및 초기화
var Users = [ {name: "소녀시대", age: 20}, {name: "걸스데이", age: 22}];

// 배열 객체 요소 추가
Users.push({name:"티아라", age: 23});

// 배열 객체의 length 속성으로 배열의 길이를 얻어낸다.
console.log("사용자 수 : %d", Users,length );
console.log("첫 번째 사용자 이름 : %s", Users[0].name );
