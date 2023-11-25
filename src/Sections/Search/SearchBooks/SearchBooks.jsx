import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksSearch } from "../../../Features/BooksSearchSlice.js";
import BookCard from "../../../Components/BookCard/BookCard.jsx";
import { Container, Grid } from "@mui/material";

function SearchBooks() {
	const booksOfSearch = useSelector((state) => state.booksSearch);
	const [books, setBooks] = useState([]);
	useEffect(() => {
		setBooks(booksOfSearch.data.items);
	}, [booksOfSearch]);
	if (books) {
		console.log(books);
		return (
			<Container className="books-list">
				<Grid
					container
					gap={5}
					sx={{ justifyContent: "center", alignItems: "center" }}
				>
					{books?.map((book, index) => {
						return (
							<Grid item key={index}>
								<BookCard
									thumbnail={book.volumeInfo.imageLinks?.thumbnail}
									title={book?.volumeInfo.title}
									subtitle={book?.volumeInfo.subtitle}
									authors={book?.volumeInfo?.authors?.join(", ")}
									publishedDate={book?.volumeInfo.publishedDate}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		);
	}
}

export default SearchBooks;
