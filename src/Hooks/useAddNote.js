export function useAddNote(book, note) {
	const newBook = { ...book };

	if (book?.notes) {
		newBook.notes.push(note);
	} else {
		newBook.notes = [note];
	}

	return newBook;
}
