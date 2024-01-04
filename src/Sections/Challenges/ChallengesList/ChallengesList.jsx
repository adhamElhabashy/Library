import React, { useContext } from "react";
import SavedBooksContext from "../../../Context/SavedBooksContext";
import { Container, Grid } from "@mui/material";
import BookCard from "../../../Components/BookCard/BookCard";

function ChallengesList() {
	const savedBooksContext = useContext(SavedBooksContext);

	return (
		<Container>
			<Grid container>
				{savedBooksContext.savedBooks?.map((obj, index) => (
					<Grid key={index} item>
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
