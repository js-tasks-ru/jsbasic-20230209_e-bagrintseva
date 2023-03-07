function makeDiagonalRed(table) {
	const trs = table.querySelectorAll('tr');

	for (let i = 0; i < trs.length; i++) {
		trs[i].querySelectorAll('td')[i].style.backgroundColor = 'red';
	}
}
