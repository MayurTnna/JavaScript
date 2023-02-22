let s="1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"

function sumofdigits(s)
{
    var ar = s.split(",");
    
    var sum = 0;
    
    for(var n of ar)
    {
        n=Number.parseFloat(n);
        sum += n
    }
    
    return sum;
}
console.log("Answer of given string:-"+s+ " is " +sumofdigits(s))