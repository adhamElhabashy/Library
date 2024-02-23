import axios from "axios";
import { useState } from "react";

export function useBookWithId(id) {
	const [response, setResponse] = useState();

	const savedBooksFromLocalStorage = JSON.parse(
		window.localStorage.getItem("saved-books")
	);
	const checkObject = savedBooksFromLocalStorage.find((ele) => ele.id === id);
	if (checkObject) {
		return checkObject;
	} else {
		axios
			.get(
				`https://www.googleapis.com/books/v1/volumes?q=${id}&key=${
					import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
				}`
			)
			.then((response) => {
				setResponse(() => response?.data.items[0]);
			});
		return response;
	}
}
