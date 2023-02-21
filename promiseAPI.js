let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    }, 2000)
})
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("value 2")
//     }, 3000)
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("error"))
    }, 3000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    }, 4000)
})


p1.then((value)=>{
    console.log(value)
})

p2.then((value)=>{
    console.log(value)
})

p3.then((value)=>{
    console.log(value)
})


// 1) promise-all

// let promise_all=Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// 2) Promise-settled
let promise_all=Promise.allSettled([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
})