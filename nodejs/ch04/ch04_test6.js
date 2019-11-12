// js의 비동기식 파일 IO에 대해 공부하자

var fs = require("fs");

// 파일을 비동기식 IO로 읽어 들인다.
fs.readFile("../package.json", "utf8", function( err, data ) {
	// callback함수의 매개변수 
	// err는 읽기 함수에 오류 유무를 나타낸다. 오류가 없으면 err == null
	// data는 읽은 정보를 나타낸다.


	// 파일을 다 읽으면 발생하는 콜백함수 내부!
	console.log( data );
});

console.log("프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.");

