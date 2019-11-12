// stream 단위로 파일 읽고 쓰기

var fs = require( "fs");

var infile = fs.createReadStream( "./output.txt", {flags: 'r' } );
var outfile = fs.createWriteStream( "./output.txt", {flags: 'w' } );

// infile 객체에 "data" event에 콜백을 지정하여 data를 읽으면 outfile에 쓰도록 한다.
infile.on( "data", function( data ) {
	console.log( "읽어 들인 데이터", data );
	outfile.write( data );
});

// infile 객체에 "end" event에 콜백을 지정하여 infile객체가 일을 모두 마치면 콜백에서 outfile의 끝을 수행한다.
infile.on("end", function() {
	console.log("파일 읽기 종료.");
	outfile.end(function() {
		console.log("파일 쓰기 종료.");
	});
});
