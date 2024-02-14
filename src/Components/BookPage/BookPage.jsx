import React from "react";
import "./BookPage.css";
import { useParams } from "react-router-dom";
import { useBookWithId } from "../../Hooks/useBookWithId.js";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

function BookPage() {
	const { bookId } = useParams();
	const book = useBookWithId(bookId);

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
						<Typography variant="subtitle1" color={"primary.dark"} gutterBottom>
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
				<div className="notes">
					<Typography variant="h3" textAlign={"center"} color={"primary.dark"}>
						Notes
					</Typography>
					{book?.notes.map((note) => (
						<div className="note">
							<Typography variant="string" color={"primary.dark"}>
								{note}
							</Typography>
							<IconButton>
								<Delete sx={{ color: "primary.dark" }} />
							</IconButton>
						</div>
					))}
				</div>
			</Container>
		</Box>
	);
}

export default BookPage;
