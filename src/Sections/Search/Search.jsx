import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchBooks from "./SearchBooks/SearchBooks";

import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Box } from "@mui/material";

function Search() {
	return (
		<Box
			className="search"
			sx={{
				mt: "50px",
				mb: "50px",
			}}
		>
			<SectionTitle>Search For Books</SectionTitle>
			<SearchBar />
			<SearchBooks />
		</Box>
	);
}

export default Search;
