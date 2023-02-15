function checkSpam(str) {
	if (str.toLowerCase().includes('1xbet') || str.toUpperCase().includes('XXX')) {
		return true;
	}
	return false;
}
