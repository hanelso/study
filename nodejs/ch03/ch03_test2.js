// 객체의 속성값에 접근하는 방법을 보는 실습예제 
// 두가지의 방법이 전혀 다르지않다.

var Person = {};

Person["age"] = 20;
Person["name"] = "소녀시대";
Person.mobile = "010-1000-1000";

console.log("나이 : %d", Person.age );
console.log("이름 : %s", Person.name );
console.log("전화 : %s", Person[ "mobile" ] );
