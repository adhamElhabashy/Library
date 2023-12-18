import React from "react";
import "./BookCard.css";
import { Box, Typography } from "@mui/material";

function BookCard({ thumbnail, title, subtitle, authors, publishedDate }) {
	return (
		<Box className="book-card" sx={{ bgcolor: "primary.light" }}>
			<div className="face">
				<div className="img-holder">
					<img src={thumbnail} alt="book image" />
				</div>
				<Typography
					variant="h6"
					textAlign="center"
					sx={{ color: "primary.dark" }}
				>
					{title}
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					sx={{ color: "secondary.light" }}
				>
					{authors}
				</Typography>
			</div>
		</Box>
	);
}

export default BookCard;
