import { useEffect, useState } from "react";
import axios from "axios";

export function useBookWithId(id) {
	return axios
		.get(
			`https://www.googleapis.com/books/v1/volumes/${id}?key=${
				import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
			}`
		)
		.then((response) => response.data);
}
