import React from "react";
import { Box, Typography } from "@mui/material";
import "./ChallengesCard.css";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { saveInLocalStorage } from "../../Functions/SaveInLocalStorage";
import NoteInput from "../NoteInput/NoteInput";

function ChallengesCard({ object, thumbnail, title }) {
	const [readingStatus, setReadingStatus] = React.useState(
		object.readingStatus
	);

	const handleChange = (event) => {
		setReadingStatus(event.target.value);
		saveInLocalStorage(object, event.target.value);
	};

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
				<FormControl>
					<Select
						value={readingStatus}
						onChange={handleChange}
						sx={{
							color: "primary.dark",
							borderColor: "primary.dark",
							marginBottom: "5px",
						}}
					>
						<MenuItem value={"none"}>None</MenuItem>
						<MenuItem value={"will read"}>Will Read</MenuItem>
						<MenuItem value={"reading"}>Reading</MenuItem>
						<MenuItem value={"read"}>Read</MenuItem>
					</Select>
				</FormControl>
				<NoteInput objectId={object.id} />
			</div>
		</Box>
	);
}

export default ChallengesCard;
