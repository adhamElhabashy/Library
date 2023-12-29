import { createContext } from "react";
import { useLocalStorageData } from "../Hooks/useLocalStorageData";

const SavedBooksContext = createContext({ savedBooks: undefined });

export function SavedBooksProvider({ children }) {
	const SavedBooksFromLocalStorage = useLocalStorageData();

	return (
		<SavedBooksContext.Provider
			value={{ savedBooks: SavedBooksFromLocalStorage }}
		>
			{children}
		</SavedBooksContext.Provider>
	);
}

export default SavedBooksContext;
