import { createContext, useState } from "react";
import { useLocalStorageData } from "../Hooks/useLocalStorageData";

const SavedBooksContext = createContext({
	savedBooks: undefined,
	addBookToTheList: undefined,
});

export function SavedBooksProvider({ children }) {
	const SavedBooksFromLocalStorage = useLocalStorageData();
	const [savedBooksState, setSavedBooks] = useState(SavedBooksFromLocalStorage);
	console.log(savedBooksState);

	function addBook(book) {
		// check if the localStorage has books data
		if (savedBooksState) {
			// search in the localStorage json for the same object as the selected book
			const theLocalStorageObject = savedBooksState.find(
				(ele) => ele.id === book.id
			);

			if (theLocalStorageObject) {
				// if the condition is true update the book with new reading state
				savedBooksState.splice(
					savedBooksState.indexOf(theLocalStorageObject),
					1,
					book
				);
			} else {
				// if the condition is false just add the book to the state
				setSavedBooks(() => [...savedBooksState, book]);
			}
		} else {
			// if the localStorage doesn't contain any object, update the array state with the book
			setSavedBooks(() => [book]);
		}
		console.log(book);
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
