/*Your job is to change the given string s using a non-negative integer n.

Each bit in n will specify whether or not to swap the case for each alphabetic character in s: 
if the bit is 1, swap the case; if its 0, leave it as is. When you finish with the last bit of n, 
start again with the first bit.

You should skip the checking of bits when a non-alphabetic character is encountered, 
but they should be preserved in their original positions.*/

    const decimalToBinary =(number)=>{
      let result = number/ 2;
      let results = []
     results.push(result)
     if(result != 0){
         decimalToBinary(result)
     }
     return results
    }
console.log(decimalToBinary(20))    
