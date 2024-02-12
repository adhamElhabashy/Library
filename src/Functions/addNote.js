export function addNote(id, localStorageArray, note) {
	const thisCardObject = localStorageArray.find((ele) => ele.id === id);

	const objectIndex = localStorageArray.indexOf(thisCardObject);

	console.log(thisCardObject);

	thisCardObject.notes.push(note);

	console.log(thisCardObject);

	localStorageArray.splice(objectIndex, 1, thisCardObject);

	let jsonObject = JSON.stringify(localStorageArray);

	window.localStorage.setItem("saved-books", jsonObject);
}
