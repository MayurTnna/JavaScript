// console.log("Start")
// setTimeout(function () {
//     console.log("Hey I am good");
// }, 3000)
// console.log("End")


// function loadScript(src, callback) {
//     var script =document.createElement( "script");
//     script.src =src;
//     script.onload = function() {
//       console.log("SRC: "  + src);
//     }
//     document.body.appendChild(script);
// }
// callback();
// function hello(){
//     alert("hello")
// }
// loadScript( "https://cdn.jsdelivr.net/npm/boatstr@5.2.1/dist/js/bootstrap.bundle.min.js", hello)

function sayHello(){
    console. log("Hello");
}
function add(num1, num2, callback){
    console. log(num1 + num2);
    callback();
}
let a = 10;
let b = 20;
add(a, b, sayHello);
