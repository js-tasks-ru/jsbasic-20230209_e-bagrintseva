function filterRange(arr, a, b) {
	return (newArray = arr.filter((elem, i) => {
		return elem >= a && elem <= b;
	}));
}
