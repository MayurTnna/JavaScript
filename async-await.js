// async function hello(){
//     console.log("Hello World")
//     return 21
// }
// hello().then((x)=>{
//     console.log(x)
// })

async function all_promises(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("99 Degree")
        })
    },1000)
    let puneWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("20 Degree")
        })
},2000)

    let delhiW= await delhiWeather
    let puneW= await puneWeather
    return[delhiW,puneW]
}
console.log("Welcome to weather control system:- ")
let a= all_promises()
console.log(a)



