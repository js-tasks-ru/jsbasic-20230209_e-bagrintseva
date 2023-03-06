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
		min: Math.min(...arr),
		max: Math.max(...arr),
	};
}
