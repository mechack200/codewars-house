/*Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).*/

const oddOrEven = (arr) =>{
   let sum = 0
   if(arr.length === 0){
       return "even"
   }
   else
   for(i in arr){
       sum += arr[i]
   }
 if(sum%2===0){
     return "even"
 }
 return "odd"
}
console.log(oddOrEven([10, 11, 0]))
console.log(oddOrEven([]))
console.log(oddOrEven([0, -1, -5]))
