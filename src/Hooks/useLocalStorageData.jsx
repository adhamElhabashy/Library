import React from "react";

export function useLocalStorageData() {
	const savedBooks = window.localStorage.getItem("saved-books");
	return JSON.parse(savedBooks);
}
