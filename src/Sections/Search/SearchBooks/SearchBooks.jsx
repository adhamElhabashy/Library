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
			<Container className="books-list" style={{ paddingTop: "100px" }}>
				<Grid container gap={5} rowGap={15} sx={{ justifyContent: "center" }}>
					{books?.map((book, index) => {
						return (
							<Grid item key={index} md={3}>
								<BookCard
									object={book}
									thumbnail={book.volumeInfo.imageLinks?.thumbnail}
									title={book?.volumeInfo.title}
									authors={book?.volumeInfo?.authors?.join(", ")}
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
