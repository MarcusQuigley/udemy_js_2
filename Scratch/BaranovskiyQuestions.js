// Question1

// if(!("a" in window)){
//     var a = 1;
// }
// console.log(a);

// Q2

// var a = 1,
//     b = function a(x){
//         x && a(--x);
//     };
// console.log(a);

// Q3
// function a(x){
//     return x * 2;
// }

// var a;
// console.log(a);
// here as var a  is not a function then its not ignored.
// So i think the answer is 'undefined' not function{...}
// turns out im wrong. var a is ignored as a is already defined before as a func

// fgf

// Q4
// function b(x,y,a){
//     arguments[2] = 10;
//     console.log(a);
// }
// b(1,2,3);

// Q5
function a() {
	console.log(this);
}
a.call(null);