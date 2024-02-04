import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import axios from "axios";

function BookPage() {
	const { bookId } = useParams();
	const [book, setBook] = useState();
	async function getTheBookWith(id) {
		const response = await axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=${id}&key=${
				import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
			}`
		);
		setBook(() => response.data?.items[0]);
		console.log(response.data?.items[0]);
	}
	useEffect(() => {
		getTheBookWith(bookId);
	}, []);
	return (
		<BookCard
			object={book}
			thumbnail={book?.volumeInfo.imageLinks?.thumbnail}
			title={book?.volumeInfo.title}
			authors={book?.volumeInfo?.authors?.join(", ")}
		/>
	);
}

export default BookPage;
