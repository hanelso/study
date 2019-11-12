// 파일을 직접 열고 파일 핸들링을 한다.

var fs = require("fs");

// 파일에 데이터를 쓴다.
// 순서가 중요하다. open -> write -> close
fs.open( "./output.txt", "w", function( err, fd ) {
	if ( err )
	{
		throw err;
	}

	var buf = new Buffer( "안녕\n");
	fs.write( fd, buf, 0, buf.length, null, function( err, written, buffer) {
		if( err )
		{
			throw err;
		}

		console.log(err, written, buffer );

		fs.close(fd, function() {
			console.log("파일 열고 데이터 쓰고 파일 닫기 완료.");
		});
	});
});
