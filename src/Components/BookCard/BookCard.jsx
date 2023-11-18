import React from "react";
import "./BookCard.css";
import { Box, Typography } from "@mui/material";

function BookCard({ thumbnail, title, subtitle, authors, publishedDate }) {
	return (
		<Box
			className="parent-box"
			sx={{ width: 248, height: 290, boxShadow: "0 0 10px primary" }}
		>
			<Box className="child-box" sx={{ bgcolor: "primary.main" }}>
				<div className="face front">
					<img src={thumbnail} alt="book thumbnail" />
				</div>
				<div className="face back" style={{ padding: 3, overflowY: "auto" }}>
					<Typography
						variant="h6"
						sx={{ color: "primary.dark", padding: "5px" }}
						textAlign="center"
					>
						{title}
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{ color: "primary.dark" }}
						textAlign="center"
					>
						{subtitle}
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{ color: "primary.dark" }}
						align="center"
						pt={1}
					>
						{authors}
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{ color: "primary.dark" }}
						align="center"
						pt={1}
					>
						{publishedDate}
					</Typography>
				</div>
			</Box>
		</Box>
	);
}

export default BookCard;
