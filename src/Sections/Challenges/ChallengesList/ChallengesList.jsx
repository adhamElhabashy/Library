import React, { useContext } from "react";
import SavedBooksContext from "../../../Context/SavedBooksContext";
import { Container, Grid } from "@mui/material";
import BookCard from "../../../Components/BookCard/BookCard";

function ChallengesList() {
	const savedBooksContext = useContext(SavedBooksContext);

	return (
		<Container style={{ paddingTop: "100px" }}>
			<Grid container gap={5} rowGap={15} sx={{ justifyContent: "center" }}>
				{savedBooksContext.savedBooks?.map((obj, index) => (
					<Grid item key={index} md={3}>
						<BookCard
							object={obj}
							thumbnail={obj.volumeInfo.imageLinks?.thumbnail}
							title={obj?.volumeInfo.title}
							authors={obj?.volumeInfo?.authors?.join(", ")}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default ChallengesList;
