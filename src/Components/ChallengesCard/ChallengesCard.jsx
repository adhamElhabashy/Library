import { Box, Button, Typography } from "@mui/material";
import "./ChallengesCard.css";
import React from "react";

function ChallengesCard({ object, thumbnail, title, authors }) {
	return (
		<Box
			className="challenge-card"
			sx={{ display: "flex", justifyContent: "center" }}
		>
			<div className="img-holder">
				<img src={thumbnail} alt={title + " book"} />
			</div>
			<div className="book-details">
				<Typography
					variant="subtitle1"
					sx={{ color: "primary.dark", marginBottom: "10px" }}
				>
					{title}
				</Typography>
				<Button
					variant="outlined"
					sx={{ color: "primary.dark", marginBottom: "10px" }}
				>
					{object.readingStatus}
				</Button>
				<Button variant="contained" sx={{ bgcolor: "primary.dark" }}>
					Add Note
				</Button>
			</div>
		</Box>
	);
}

export default ChallengesCard;
