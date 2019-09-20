// (function() {
//     var foo = 61;
// function bar(){
//     if (!foo){
//         var foo = 100;
//     }
//     console.log(foo);
// }

// bar();

// var ee;
// console.log(ee + ' ' + !ee);
// })()z

// (function() {
// function bah(){
//     console.log('bah');
//     if (false){
//         var x = 1;
//     }
//     console.log(x,y);
//     return;
//     var y = 1;
// }

// bah();
// })()

// (function(){
// console.log('-----------hoisting1------');
// // console.log(a);
// // console.log(b);
// // var a = b;
// // var b =2;
// // console.log(b);
// // console.log(a);
// //BECOMES
// var a,b;
// console.log(a); //undefined
// console.log(b); //undefined
// a = b;
//  b =2;
// console.log(b); //2
// console.log(a); //undefined as a and b are primitive types
// })()
// console.log('-------------hoisting2---');
// (function(){
// var a=b;
// var c=d;
// console.log(a);
// console.log(c);
// function b(){
//     return c;
// }
// var d = function(){
//     return b();
// }
// })()
// //BECOMES
// // function b(){
// //     return c;
// // }
// // var a,c,d;

// //  a=b; // c==undefined
// //  c=d;  //d() = undefined
// // a; //unedfined
// // c; //undefined
// // // function b(){
// // //     return c;
// // // }
// //   d = function(){
// //     return b();
// // }

// console.log('-------------hoisting3---');
// (function(){
// foo();
// var foo=2;
// function foo(){
//     console.log('bar');
// }
// function foo(){
//     console.log('foo');
// }
// })();
// // //BECOMES
// // // function foo(){
// // //     console.log('bar');
// // // }
// // function foo(){// THIS overwrites function foo()
// //     console.log('foo');
// // }
// // //var foo = 2 //THIS IS IGNORED as var foo ALREADY exists (as a function)
// // foo();  //foo
// // //var foo=2;

// console.log('---------hoisting4 --');
// (function(){var a = 1;
// function b() {
//     a = 10;
//     console.log(a);
// 	return;
// 	function a() {}
// }
// b();
// console.log(a);
// })()

// //becomes
// // function b() {
// //     function a() {}
// //     a = 10;  
// //  console.log(a);
// // 	return;
	
// // }
// // var a;
// // a=1;
// // b();
// // alert(a); //1

 
var a = 1;
function b() {
    console.log(a);
    a = 10;
   // console.log(a);
	return;
	function a() {}
}
b();
console.log(a);