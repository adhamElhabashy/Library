import React, { useEffect, useState } from "react";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { addNote } from "../../Functions/addNote";

function NoteInput({ objectId }) {
	const [note, setNote] = React.useState("What Is Your Note");
	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="note-input">
			<Button
				variant="contained"
				sx={{ bgcolor: "primary.dark" }}
				onClick={handleClick}
			>
				Add Note
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<TextField
					value={note}
					onChange={(event) => {
						setNote(event.target.value);
					}}
				/>
				<Button
					variant="contained"
					sx={{ padding: "15px 30px" }}
					onClick={(e) => {
						addNote(objectId, note);
						setNote("");
					}}
				>
					Add
				</Button>
			</Popover>
		</div>
	);
}

export default NoteInput;
