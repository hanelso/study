// js의 동기식 파일 IO 공부하기

var fs = require("fs");

// 파일을 동기식 IO로 읽어 들인다.
var data = fs.readFileSync("../package.json", "utf8");

// 읽어들인 데이터를 출력한다.
console.log( data );
