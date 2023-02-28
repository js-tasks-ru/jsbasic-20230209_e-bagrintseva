function camelize(str) {
	return str
		.split('-')
		.map((elem, i) => {
			if (i !== 0) {
				elem = elem[0].toUpperCase() + elem.slice(1);
			}
			return elem;
		})
		.join('');
}
