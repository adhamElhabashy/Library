export function saveInLocalStorage(object, readingStatusParam) {
	let storageArray = [];

	const savedBooks = window.localStorage.getItem("saved-books");

	if (savedBooks) {
		storageArray = JSON.parse(savedBooks);
	}

	const theLocalStorageObject = storageArray.find(
		(ele) => ele.id === object.id
	);

	// search in the localStorage json for the same object as the selected book
	if (theLocalStorageObject) {
		storageArray.splice(storageArray.indexOf(theLocalStorageObject), 1, {
			...object,
			readingStatus: readingStatusParam,
		});
	} else {
		storageArray.push({
			...object,
			readingStatus: readingStatusParam,
		});
	}

	let jsonObject = JSON.stringify(storageArray);

	window.localStorage.setItem("saved-books", jsonObject);
}
