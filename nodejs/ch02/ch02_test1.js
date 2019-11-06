/*
// 출력 // 
duration_sum: 0.083ms
1부터 1000까지 더한 결과물 : 500500
현재 실행한 파일의 이름 : 파일의 절대경로 
현재 실행한 파일의 패스 : 파일이 존재하는 데릭토리의 경로
{ name: '소녀시대', age: 20 }
*/

var result = 0;

// duration_sum 이라는 문자열을 time의 값을 저장할 객체의 key값으로 설정한다
console.time( "duration_sum" );

for( var i = 1; i <= 1000; i++ )
{
	result += i;
}

// timeEnd가 되면 duration_sum을 key값으로 갖는 객체의 시간 변화값을 출력한다.
console.timeEnd("duration_sum" );
console.log( "1부터 1000까지 더한 결과물 : %d", result );

// 전역 변수 __filename, __dirname ( global variable : 별도의 모듈이 없어도 사용가능한 전역적 변수 )
console.log("현재 실행한 파일의 이름 : %s", __filename );
console.log("현재 실행한 파일의 패스 : %s", __dirname );

// 객체를 나타낼때는 중괄호를 이용하여 나타낸다. "{}"
// dir()은 객체의 속성값들을 확인한다. 
var Person = { name: "소녀시대", age: 20 };
console.dir( Person );
