import React, { useEffect, useState } from "react";
import "./BookPage.css";
import { useParams } from "react-router-dom";
import { useBookWithId } from "../../Hooks/useBookWithId.js";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

function BookPage() {
	const { bookId } = useParams();
	const [book, setBook] = useState(null);

	useEffect(() => {
		useBookWithId(bookId)
			.then((bookData) => setBook(bookData))
			.catch((error) => {
				console.error("Error fetching book:", error);
			});
	}, [bookId]);

	const localStorageArray = JSON.parse(
		window.localStorage.getItem("saved-books")
	);

	const bookIndex = localStorageArray.indexOf(book);

	function removeNote(noteNumber) {
		const updatedNotes = book.notes.filter((ele) => ele.number !== noteNumber);

		const updatedBook = { ...book, notes: updatedNotes };

		setBook(updatedBook);

		localStorageArray.splice(bookIndex, 1, updatedBook);

		const jsonObject = JSON.stringify(localStorageArray);

		window.localStorage.setItem("saved-books", jsonObject);
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
								<Typography variant="h6" color={"primary.dark"}>
									Categories: {book?.volumeInfo.categories.join(", ")}
								</Typography>
								<Typography variant="h6" color={"primary.dark"}>
									pages: {book?.volumeInfo.pageCount}
								</Typography>
								<Typography variant="h6" color={"primary.dark"}>
									Published: {book?.volumeInfo.publishedDate}
								</Typography>
							</div>
						</div>
					</div>
					{book?.notes && (
						<div className="notes">
							<Typography
								variant="h3"
								textAlign={"center"}
								color={"primary.dark"}
							>
								Notes
							</Typography>
							{book?.notes.map((ele, index) => (
								<div className="note" key={index}>
									<Typography variant="string" color={"primary.dark"}>
										{ele.note}
									</Typography>
									<IconButton
										onClick={() => {
											removeNote(ele.number);
										}}
									>
										<Delete sx={{ color: "primary.dark" }} />
									</IconButton>
								</div>
							))}
						</div>
					)}
				</Container>
			</Box>
		);
	} else {
		return <h2>Something went wrong</h2>;
	}
}

export default BookPage;
