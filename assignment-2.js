 let str= "foo8bar8cat2tc2"
// sum=0
// nums=[]


// sumstring=(str)=>{
//     for( let k in str)
//     {
//         if(typeof(str.k)==="number")
//         num.push([str[k]])
//         console.log(num[k])
//     }
//     console.log(num[k])
// }
let m22=0
let tot

for( let k in str)
{
    console.log(Number(str[k]))
  

}

sumOfDigitsFromString =(str)=>{
    let nums = [];
    let sum = 0;
  
    for (let i in str) {
      if (!isNaN(Number(str[i]))) {
        nums.push(Number(str[i]));
      }
    }
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      sum =sum+ nums[i];
    }
    return sum;
  }
  

  console.log("The sum of numbers from given string "+str+" is "  +sumOfDigitsFromString(str));




