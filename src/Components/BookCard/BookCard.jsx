import React from "react";
import "./BookCard.css";
import { Box, Button, Typography } from "@mui/material";

function BookCard({ thumbnail, title, authors }) {
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
				<div className="action-buttons">
					<Button
						variant="outlined"
						sx={{ color: "primary.dark", borderColor: "primary.dark" }}
					>
						Will Read
					</Button>
					<Button
						variant="outlined"
						sx={{ color: "primary.dark", borderColor: "primary.dark" }}
					>
						Reading
					</Button>
					<Button
						variant="outlined"
						sx={{ color: "primary.dark", borderColor: "primary.dark" }}
					>
						Read
					</Button>
				</div>
			</div>
		</Box>
	);
}

export default BookCard;
