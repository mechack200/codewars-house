// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
// They would like your help with an application form that will tell prospective members
// which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater
// than 7. In this croquet club, handicaps range from -2 to +26; the better the player
// the lower the handicap.

// Input
// Input will consist of a list of lists containing two items each. Each list contains
// information for a single potential member. Information consists of an integer for the
// person's age and an integer for the person's handicap.

// Note for F#: The input will be of (int list list) which is a List<List>

// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating
// whether the respective member is to be placed in the senior or open category.

// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// const openOrSenior = (clubPotentialMembersInfo) => {
// 	let membersCategories = [];
// 	for (let member = 0; member < clubPotentialMembersInfo.length; member++) {
// 		if (
// 			clubPotentialMembersInfo[member][0] >= 55 &&
// 			clubPotentialMembersInfo[member][1] > 7
// 		) {
// 			membersCategories.push('senior');
// 		} else {
// 			membersCategories.push('open');
// 		}
// 	}
// 	return membersCategories;
// };
const damiDays = [
	{ day: 'monday', unsafe: true, happiness: true, smile: 100 },
	{ day: 'tuesday', unsafe: false, happiness: true, smile: 100 },
	{ day: 'wednessday', unsafe: false, happiness: true, smile: 99 },
	{ day: 'Thursday', unsafe: true, happiness: true, smile: 99 },
];

const damilolaDaysOnEarth = () => {
	 const damiNew = damiDays.filter((day) => day.unsafe !== true);
	return damiNew;
};

console.log(damilolaDaysOnEarth());

const openOrSenior = (clubPotentialMembersInfo) => {
	function categorizeMember(member) {
		return member[0] >= 55 && member[1] > 7 ? 'senior' : 'open';
	}
	return clubPotentialMembersInfo.map(categorizeMember);
};

console.log(
	openOrSenior([
		[18, 20],
		[45, 2],
		[61, 12],
		[37, 6],
		[21, 21],
		[78, 9],
	])
);
console.log(
	openOrSenior([
		[45, 12],
		[55, 21],
		[19, -2],
		[104, 20],
	])
);
