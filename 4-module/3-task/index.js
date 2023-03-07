function highlight(table) {
	const trs = table.querySelectorAll('tbody tr');

	trs.forEach((tr) => {
		let tds = tr.querySelectorAll('td');

		// for (let i = 0; i < tds.length; i++) {
		if (tds[3].dataset.available == 'true') {
			tr.classList.add('available');
		} else if (tds[3].dataset.available == 'false') {
			tr.classList.add('unavailable');
		} else if (!tds[3].dataset.available) {
			tr.hidden = true;
		}

		if (tds[2].textContent === 'm') {
			tr.classList.add('male');
		} else if (tds[2].textContent === 'f') {
			tr.classList.add('female');
		}

		if (+tds[1].textContent < 18) {
			tr.style.textDecoration = 'line-through';
		}
	});
}
