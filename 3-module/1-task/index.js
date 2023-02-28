function namify(users) {
	let array = [];
	for (let i = 0; i < users.length; i++) {
		array[i] = users[i].name;
	}
	return array;
}
