export function addNote(id, note) {
	const localStorageArray = JSON.parse(
		window.localStorage.getItem("saved-books")
	);

	const thisCardObject = localStorageArray.find((ele) => ele.id === id);

	const objectIndex = localStorageArray.indexOf(thisCardObject);

	console.log(thisCardObject);

	thisCardObject.notes.push({
		note: note,
		number: thisCardObject.notes.length + 1,
	});

	console.log(thisCardObject);

	localStorageArray.splice(objectIndex, 1, thisCardObject);

	let jsonObject = JSON.stringify(localStorageArray);

	window.localStorage.setItem("saved-books", jsonObject);
}
