DifferentOfTwo = (n) => {
	let different = 2;
	let allPairs = [];
	//sort the arrays
	const sortedArray = n.sort((a, b) => a - b);
	sortedArray.map((firstElement) => {
		sortedArray.map((secondElement) => {
			if (firstElement !== secondElement && firstElement < secondElement) {
				let pairDiff = secondElement - firstElement;
				if (pairDiff === different) {
					allPairs.push([firstElement, secondElement]);
				}
			}
		});
	});
	return allPairs;
};
console.log(DifferentOfTwo([1, 3, 2, 4, 5, 6]));
