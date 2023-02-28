function getMinMax(str) {
	let arr = str
		.split(' ')
		.filter((elem) => {
			return Number(elem);
		})
		.map((elem) => {
			return Number(elem);
		});
	return {
		min: getMinOfArray(arr),
		max: getMaxOfArray(arr),
	};
}

function getMaxOfArray(numArray) {
	return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
	return Math.min.apply(null, numArray);
}
