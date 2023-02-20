// let promi=new Promise(function(resolve,reject){
 

//     alert("i am in promise")
//     resolve()


// })



// console.log("Hello one")
// setTimeout( function (){
//     console.log("In timeout of 2 seconds")
// },2000);
// console.log("My name is Jaggu")
// console.log(promi)
// --------------------------------------------------------------------

let p1=new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout( function (){
            console.log("I am in promise and i am done")
             resolve(9)
        },5000);
})
let p2=new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout( function (){
            // console.log("I am in promise and i am rejected") 
            // resolve(9)
            // reject( new error("i am an error"))
            reject()
        },5000);
})

console.log(p1,p2)
p1.then((value)=>{
    console.log(value)
})
p2.catch((error)=>{
    console.log("sorry it is rejected")
})

// p2.then((value)=>{
//     console.log(value)
// })
