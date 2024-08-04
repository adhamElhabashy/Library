import React, { useEffect, useState } from "react";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { saveInLocalStorage } from "../../Functions/SaveInLocalStorage";
import SavedBooksContext from "../../Context/SavedBooksContext";
import { useAddNote } from "../../Hooks/useAddNote";

function NoteInput({ objectId }) {
	const [note, setNote] = React.useState("What Is Your Note");
	const [localStorageBooks, setLocalStorageBooks] = React.useState(
		JSON.parse(window.localStorage.getItem("saved-books"))
	);
	const [book, setBook] = React.useState(
		localStorageBooks.find((book) => book.id == objectId)
	);

	const savedBooksContext = React.useContext(SavedBooksContext);

	function handleAddNote() {
		const newBook = useAddNote(book, note);
		setBook(newBook);

		saveInLocalStorage(newBook, newBook.readingStatus);
		savedBooksContext.addBookToTheList({
			...newBook,
		});
	}

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
						handleAddNote();
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
