/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once. */

const multipleOfNumBelow = (num) => {
	let multiple = [];
	if (num === 0) {
		return 0;
	}
	for (let i = 3; i < num; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			// check for the existance of i
			multiple.indexOf(i) === -1 && multiple.push(i);
		}
	}
	return multiple.reduce((acc, current) => acc + current, 0);
};
console.log(multipleOfNumBelow(16));
// 3, 5, 9, 10.12, 15;
console.log(multipleOfNumBelow(0));
