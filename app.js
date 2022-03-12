const add = (num1, num2) => {
    return num1+num2;
}

const myArray =["dave","steve","Gary"];

const multiply = (num1,num2) => {
    return num1*num2;
}

const isTruthy = () => {
	return "Truth";
};

const isNotFalsy = () => {
	return "Truth";
};

const car = () => {
	return { carModel: "F40", carMake: "Ferrari" };
};

const getItems = (array) => {
	return array.filter((e) => e.length >= 6);
};

const convertNumberToString = (num) => {
	return num.toString();
};

const getPlanetFromOrder = (order) => {
	const planets = [
		"Mercury",
		"Venus",
		"Earth",
		"Mars",
		"Jupiter",
		"Saturn",
		"Uranus",
		"Neptune",
	];
	return planets[order - 1];
};

const countAmountOfPresentStudents = (attendanceArray) => {
	return attendanceArray.filter((attendance) => attendance === true).length;
};

const squareAndConcat = (digits) => {
	const digitString = digits.toString().split("");
	const result = digitString.reduce((prev, cur) => {
		prev += cur ** 2;
		return prev;
	}, "");
	return parseInt(result);
};

const convertYearToCentury = (y) => {
	return Math.floor(y / 100 +1);
};

const binary = (binaryArray) => {
	return binaryArray.reverse().reduce((prev, curr, index) => {
		prev += curr === 1 ? 2 ** index : 0;
		return prev;
	}, 0);
};

module.exports = {
	add,
	myArray,
    multiply,
	isTruthy,
	isNotFalsy,
	car,
	getItems,
	convertNumberToString,
	getPlanetFromOrder,
	countAmountOfPresentStudents,
	squareAndConcat,
	convertYearToCentury,
	binary,
};