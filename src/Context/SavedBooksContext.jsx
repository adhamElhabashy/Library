import { createContext, useState } from "react";

const SavedBooksContext = createContext({
	savedBooks: undefined,
	addBookToTheList: undefined,
});

export function SavedBooksProvider({ children }) {
	const SavedBooksFromLocalStorage = JSON.parse(
		window.localStorage.getItem("saved-books")
	);
	const [savedBooksState, setSavedBooks] = useState(SavedBooksFromLocalStorage);

	function addBook(book) {
		// check if the localStorage has books data
		if (savedBooksState) {
			// search in the localStorage json for the same object as the selected book
			const theLocalStorageObject = savedBooksState.find(
				(ele) => ele.id === book.id
			);

			if (theLocalStorageObject) {
				// if the condition is true update the book with new reading state

				setSavedBooks(() => {
					savedBooksState.splice(
						savedBooksState.indexOf(theLocalStorageObject),
						1,
						book
					);
					return savedBooksState;
				});
			} else {
				// if the condition is false just add the book to the state
				setSavedBooks(() => [...savedBooksState, book]);
			}
		} else {
			// if the localStorage doesn't contain any object, update the array state with the book
			setSavedBooks(() => [book]);
		}
	}

	return (
		<SavedBooksContext.Provider
			value={{ savedBooks: savedBooksState, addBookToTheList: addBook }}
		>
			{children}
		</SavedBooksContext.Provider>
	);
}

export default SavedBooksContext;
