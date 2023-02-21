  let p1=new Promise((resolve,reject)=>{
    console.log("I am promise p1")
    setTimeout(()=>{
        console.log("would be resolve after 2 seconds")
        resolve(90)
    }, 2000)
  })
  console.log(p1)



  let p2=new Promise((resolve,reject)=>{
    console.log("I am promise p2")
    setTimeout(()=>{
        console.log("would be resolve after 2 seconds")
        resolve(90)
    }, 2000)
  })
  console.log(p2)





  p1.then((value)=>
  {
    console.log(value)
    return p2
  }).then((value)=>{
    console.log(value)
  })



