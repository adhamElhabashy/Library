import React, { useState } from "react";

export function useLocalStorageData() {
	const [savedBooks, setBooks] = useState(
		window.localStorage.getItem("saved-books")
	);

	return JSON.parse(savedBooks);
}
