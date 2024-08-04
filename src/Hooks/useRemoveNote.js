export function useRemoveNote(index, book) {
	let newBook = { ...book };

	newBook.notes = [
		...newBook.notes.slice(0, index),
		...newBook.notes.slice(index + 1),
	];
	return newBook;
}
