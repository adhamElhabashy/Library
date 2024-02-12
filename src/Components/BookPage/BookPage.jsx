import React from "react";
import { useParams } from "react-router-dom";
import { useBookWithId } from "../../Hooks/useBookWithId.js";

function BookPage() {
	const { bookId } = useParams();
	const book = useBookWithId(bookId);

	return <img src={book?.volumeInfo.imageLinks?.thumbnail} alt="" />;
}

export default BookPage;
