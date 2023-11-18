import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import BookCard from "../../../Components/BookCard/BookCard";
import { Container, Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";

function BooksOfTopic() {
	const [books, setBooks] = useState([]);
	const booksData = useSelector((state) => state.books);
	const [page, setPage] = React.useState(1);

	useEffect(() => {
		setBooks(booksData.data);
	}, [booksData]);

	const handleChange = (event, value) => {
		setPage(value);
	};

	if (books?.length !== 0) {
		return (
			<Container className="books-list">
				<Grid
					container
					gap={5}
					sx={{ justifyContent: "center", alignItems: "center" }}
				>
					{books?.items.map((book) => {
						return (
							<Grid item>
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
				<Pagination
					count={10}
					page={page}
					onChange={handleChange}
					sx={{
						mt: 5,
						position: "absolute",
						left: "50%",
						transform: "translateX(-50%)",
					}}
				/>
			</Container>
		);
	}
}

export default BooksOfTopic;
