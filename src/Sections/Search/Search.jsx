import React, { useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchBooks from "./SearchBooks/SearchBooks";
import { useDispatch } from "react-redux";
import { fetchBooksSearch } from "../../Features/BooksSearchSlice";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Box } from "@mui/material";

function Search() {
	const dispatch = useDispatch();

	useEffect(() => {
		// this is a temporary dispatch
		dispatch(fetchBooksSearch("technology"));
	}, []);
	return (
		<Box
			className="search"
			sx={{
				mt: "50px",
				mb: "50px",
				bgcolor: "primary.main",
			}}
		>
			<SectionTitle>Search For Books</SectionTitle>
			<SearchBar />
			<SearchBooks />
		</Box>
	);
}

export default Search;
