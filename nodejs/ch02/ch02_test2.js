/*
// 출력 // 

*/

// process.argv.length : "process 객체"의 속성 "argv 객체"의 속성 length !
console.log("argv 속성의 매개변수의 수 : " + process.argv.length );
console.dir( process.argv );


if ( process.argv.length > 2 ) {
	console.log("세 번째 매개변수의 값 : %s", process.argv[2]);
}

process.argv.forEach( function( item, index) {
	console.log( index + " : ", item );
});


console.dir(process.env );

console.log( "OS 환경 변수의 값 : " + process.env["OS"] );
