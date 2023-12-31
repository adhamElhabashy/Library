import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import BookCard from "../../../Components/BookCard/BookCard";
import { Container, Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import { fetchWebBooks } from "../../../Features/WebBooksSlice";
function BooksOfTopic() {
	const [books, setBooks] = useState([]);
	const booksData = useSelector((state) => state.books);
	// added pagination functionality
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);
	// 39 because api items index start from 0
	const [recordsPerPage, setRecordsPerPage] = useState(9);
	const indexOfLastRecord = page * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

	useEffect(() => {
		setBooks(booksData.data);
	}, [booksData]);

	useEffect(() => {
		dispatch(fetchWebBooks(indexOfFirstRecord));
	}, [page]);

	const handleChange = (event, value) => {
		setPage(value);
	};

	if (books?.length !== 0) {
		return (
			<Container className="books-list" style={{ paddingTop: "100px" }}>
				<Grid container gap={5} rowGap={15} sx={{ justifyContent: "center" }}>
					{books?.items.map((book, index) => {
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
