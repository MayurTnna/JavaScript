// const sum= (a,b,c,d)=>{
//     console.log("Timeout is running" +(a+b+c+d))
//     console.log("Timeout is running" +(a+b+c+d))
// }

// setTimeout(sum, 1000, 1,1,1,1)
setInterval(sum, 1000, 1,1,1,1)

function sum( a,b,c,d){
    var t= a+b+c+d;
    console.log( t)
}