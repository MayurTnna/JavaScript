// function hello(){
//     console.log("Hello World")
// }
// hello()



// const sum= (a ,b)=>
// {
//     return(console.log("sum of given two numbers"+a+ ", " +b+ "is " +(a+b)))
// }
// let p=10;
// let q=20;
// sum(p,q)

// practise set -3

const item={
    "harry": 90,
    "rohan": 70,
    "akash": 67,
}
// for(let a in item){
//     console.log(a+ " scored" +item[a]+ "in science exam")
// }

for(let i=0; i<Object.keys(item).length;i++){
    console.log("The marks of " +Object.keys(item)[i]+ " is " +item[Object.keys(item)[i]])
}