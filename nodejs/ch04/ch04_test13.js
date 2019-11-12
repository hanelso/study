// http 모듈 쉬운 예제

// 모듈 로드
var fs = require("fs");
var http = require("http");

// server에 http모듈의 createServer()로 server를 생성및 output.txt를 읽어서 respond 객체에 pipe를 연결해준다.( 결국 respond도 스트림 객체 )
var server = http.createServer( function( req, res ) {
	// 파일을 읽어 응답 스트림과 pipe()로 연결한다.
	var instream = fs.createReadStream( "./output.txt");
	instream.pipe(res);
});

// server가 7001번 포트에서 127.0.0.1 ip 주소로 요청을 기다린다.
server.listen( 7001, "127.0.0.1");
