console.log(document.cookies)

document.cookies="name=Mayur84905"
console.log(document.cookies)


//encodeurlcomponents:-

let key=prompt("enter your key")
let value=prompt("Enter your value")
document.cookies=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//'1===' given key and being encoded here 

console.log(document.cookies)

decodeURIComponent("1%3D%3D%3D")