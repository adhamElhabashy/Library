import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRandomNumber } from "../../../utils/getRandomNumber";
import BookCard from "../../../Components/BookCard/BookCard";

function Shelf() {
	const [books, setBooks] = useState([]);
	const booksData = useSelector((state) => state.books);
	useEffect(() => {
		setBooks(booksData.data);
	}, [booksData]);
	console.log(books);
	if (books?.length !== 0) {
		let randombook = books?.items[getRandomNumber()];

		return (
			<div className="shelf">
				<BookCard
					thumbnail={randombook.volumeInfo.imageLinks?.thumbnail}
					title={randombook?.volumeInfo.title}
					subtitle={randombook?.volumeInfo.subtitle}
					authors={randombook?.volumeInfo?.authors?.join(", ")}
					publishedDate={randombook?.volumeInfo.publishedDate}
				/>
			</div>
		);
	}
}

export default Shelf;
