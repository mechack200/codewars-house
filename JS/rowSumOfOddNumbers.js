let em_list = [1, 2, 3];
const wages_checker = () => {
	console.log(em_list.length);
};
console.log('wages checker');
console.log(wages_checker());

const rowSum = (n) => {
	let arrOfOdd = [];
	let total = 0;
	//check for where to start and end the loop
	for (let i = n * (n - 1) + 1; i <= n * n + (n - 1); i++) {
		if (i % 2 == 1) {
			arrOfOdd.push(i);
			total = arrOfOdd.reduce((acc, cur) => acc + cur, 0);
		}
	}
	console.log(arrOfOdd);
	console.log(total);
};

console.log(rowSum(20));
console.log(rowSum(10));
console.log(rowSum(4));
console.log(rowSum(3));
console.log(rowSum(2));
console.log(rowSum(1));
