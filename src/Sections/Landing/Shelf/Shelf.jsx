import React, { useEffect, useState } from "react";
import "./Shelf.css";
import { useSelector } from "react-redux";
import { Box, Paper, Typography } from "@mui/material";
import { getRandomNumber } from "../../../utils/getRandomNumber";

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
			<div className="shelf" style={{ width: 248, height: 290 }}>
				<Box className="parent-box">
					<Box className="child-box" sx={{ bgcolor: "primary.main" }}>
						<div className="face front">
							<img
								src={randombook.volumeInfo.imageLinks?.thumbnail}
								alt="book thumbnail"
							/>
						</div>
						<div
							className="face back"
							style={{ padding: 3, overflowY: "auto" }}
						>
							<Typography
								variant="h6"
								sx={{ color: "primary.dark", padding: "5px" }}
								textAlign="center"
							>
								{randombook?.volumeInfo.title}
							</Typography>
							<Typography
								variant="subtitle1"
								sx={{ color: "primary.dark" }}
								textAlign="center"
							>
								{randombook?.volumeInfo.subtitle}
							</Typography>
							<Typography
								variant="subtitle1"
								sx={{ color: "primary.dark" }}
								align="center"
								pt={1}
							>
								{randombook?.volumeInfo?.authors?.join(", ")}
							</Typography>
							<Typography
								variant="subtitle1"
								sx={{ color: "primary.dark" }}
								align="center"
								pt={1}
							>
								{randombook?.volumeInfo.publishedDate}
							</Typography>
						</div>
					</Box>
				</Box>
			</div>
		);
	}
}

export default Shelf;
