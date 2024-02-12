import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./ChallengesCard.css";
import { Link } from "react-router-dom";

import NoteInput from "../NoteInput/NoteInput";
function ChallengesCard({ object, thumbnail, title }) {
	return (
		<Box
			className="challenge-card"
			sx={{ display: "flex", justifyContent: "center" }}
		>
			<Link to={`/books/${object?.id}`}>
				<div className="img-holder">
					<img src={thumbnail} alt={title + " book"} />
				</div>
			</Link>
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
				<NoteInput objectId={object.id} />
			</div>
		</Box>
	);
}

export default ChallengesCard;
