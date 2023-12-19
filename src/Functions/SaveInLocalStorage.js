export function saveInLocalStorage(object, readingStatusParam) {
	let storageArray = [];
	const savedBooks = window.localStorage.getItem("saved-books");
	if (savedBooks) {
		storageArray = JSON.parse(savedBooks);
	}

	storageArray.push({
		...object,
		readingStatus: readingStatusParam,
	});

	let jsonObject = JSON.stringify(storageArray);

	window.localStorage.setItem("saved-books", jsonObject);
}
