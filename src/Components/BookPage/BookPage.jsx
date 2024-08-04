import React, { useContext, useEffect, useState } from "react";
import "./BookPage.css";
import { useParams } from "react-router-dom";
import { useBookWithId } from "../../Hooks/useBookWithId.js";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { saveInLocalStorage } from "../../Functions/SaveInLocalStorage";
import SavedBooksContext from "../../Context/SavedBooksContext";
import { useRemoveNote } from "../../Hooks/useRemoveNote.js";

function BookPage() {
	const { bookId } = useParams();
	const [book, setBook] = useState(null);
	const [notes, setNotes] = useState([]);
	const savedBooksContext = useContext(SavedBooksContext);

	useEffect(() => {
		const bookInLocalStorage = JSON.parse(
			window.localStorage.getItem("saved-books")
		).find((book) => book.id === bookId);
		console.log(bookInLocalStorage);

		if (!bookInLocalStorage) {
			useBookWithId(bookId)
				.then((bookData) => {
					setBook(bookData);
				})
				.catch((error) => {
					console.error("Error fetching book:", error);
				});
		} else {
			setBook(bookInLocalStorage);
			setNotes(bookInLocalStorage.notes);
		}
	}, []);

	function handleClick(index) {
		const newBook = useRemoveNote(index, book);
		setBook(newBook);
		setNotes(newBook.notes);

		saveInLocalStorage(newBook, newBook.readingStatus);
		savedBooksContext.addBookToTheList({
			...newBook,
		});
		console.log(notes);
	}

	if (book) {
		return (
			<Box
				className="book-page"
				sx={{
					bgcolor: "primary.main",
				}}
			>
				<Container className="book-page-container">
					<div className="book-description">
						<div className="image-holder">
							<img
								src={book?.volumeInfo.imageLinks?.thumbnail}
								alt={book?.volumeInfo.title}
							/>
						</div>
						<div className="book-details">
							<Typography variant="h2" color={"primary.dark"} gutterBottom>
								{book?.volumeInfo.title}
							</Typography>
							<Typography variant="h6" color={"primary.dark"} gutterBottom>
								Authors: {book?.volumeInfo.authors.join(", ")}
							</Typography>
							<Typography
								variant="subtitle1"
								color={"primary.dark"}
								gutterBottom
							>
								{book?.volumeInfo.description}
							</Typography>
							<div className="sub-details">
								<Typography variant="h6" color={"primary.dark"} gutterBottom>
									Categories: {book?.volumeInfo.categories.join(", ")}
								</Typography>
								<Typography variant="h6" color={"primary.dark"} gutterBottom>
									pages: {book?.volumeInfo.pageCount}
								</Typography>
								<Typography variant="h6" color={"primary.dark"}>
									Published: {book?.volumeInfo.publishedDate}
								</Typography>
							</div>
							{notes && (
								<div className="notes">
									<Typography
										variant="h3"
										textAlign={"center"}
										color={"primary.dark"}
									>
										Notes
									</Typography>
									{notes.map((ele, index) => (
										<div className="note" key={index}>
											<Typography variant="string" color={"primary.dark"}>
												{ele}
											</Typography>
											<IconButton
												onClick={() => {
													handleClick(index);
												}}
											>
												<Delete sx={{ color: "primary.dark" }} />
											</IconButton>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</Container>
			</Box>
		);
	} else {
		return <h2>Something went wrong</h2>;
	}
}

export default BookPage;
