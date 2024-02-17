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
		if (readingStatusParam !== "none") {
			storageArray.splice(storageArray.indexOf(theLocalStorageObject), 1, {
				...object,
				readingStatus: readingStatusParam,
				notes: [],
			});
		} else {
			storageArray.splice(storageArray.indexOf(theLocalStorageObject), 1);
		}
	} else {
		storageArray.push({
			...object,
			readingStatus: readingStatusParam,
			notes: [],
		});
	}

	let jsonObject = JSON.stringify(storageArray);

	window.localStorage.setItem("saved-books", jsonObject);
}
