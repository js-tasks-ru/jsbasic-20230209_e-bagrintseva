function makeFriendsList(friends) {
	const list = document.createElement('ul');
	let listItems = [];

	for (let friend of friends) {
		const listItem = document.createElement('li');
		let item = `${friend.firstName} ${friend.lastName}`;
		listItem.textContent = item;
		listItems.push(listItem);
		list.append(listItem);
	}

	return list;
}
