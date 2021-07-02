/* We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?*/

function isEven(positiveInteger){
    if(positiveInteger === 0){
        return true
    }
    else if( positiveInteger === 1)
      return false
    else{
        return  isEven(positiveInteger - 2)
    }     
}
console.log(isEven(61))
console.log(isEven(62))

 /*Bean counting
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.*/

function countBs(str){
    let count = 0;
    for(i = 0 ; i <str.length; i++){
        if(str[i] === 'B' || str[i] === 'b' ){
           count = count + 1
        }
    }
    return count
}

function countChar(str, cha){
    let count = 0;
    for(i = 0 ; i <str.length; i++){
        if(str[i] === cha ){
           count = count + 1
        }
    }
    return count
}

console.log(countChar("GBOYEBUN" , 'G'))
console.log(countBs("bOMBALBALEB"))

