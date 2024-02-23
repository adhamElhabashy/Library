import React, { useEffect, useRef } from "react";
import "./SearchBar.css";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchBooksSearch } from "../../../Features/BooksSearchSlice";

function SearchBar() {
	const theme = useTheme();
	const dispatch = useDispatch();
	const inputRef = useRef();
	function searchForBook(value) {
		dispatch(fetchBooksSearch(value));
	}

	return (
		<div className="search-bar">
			<input
				type="text"
				style={{ backgroundColor: theme.palette.primary.main }}
				className="search-input"
				ref={inputRef}
			/>
			<Button
				variant="contained"
				sx={{
					borderRadius: 25,
					padding: "15px 25px",
					position: "absolute",
					border: "1px solid ",
					right: "0%",
					borderColor: "primary.dark",
					color: "primary.dark",
					fontWeight: "bold",
					":hover": {
						color: "common.white",
					},
				}}
				onClick={(event) => searchForBook(inputRef.current.value)}
			>
				Search
			</Button>
		</div>
	);
}

export default SearchBar;
