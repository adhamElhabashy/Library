import React, { useContext } from "react";
import ChallengesList from "./ChallengesList/ChallengesList";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Box, Typography } from "@mui/material";
import SavedBooksContext from "../../Context/SavedBooksContext";

function Challenges() {
	const savedBooksContext = useContext(SavedBooksContext);
	return (
		<div className="challenges">
			<Box
				sx={{
					marginTop: "50px",
					padding: "30px 0",
					bgcolor: "primary.main",
					minHeight: "100vh",
					position: "relative",
				}}
			>
				<SectionTitle>Your Challenges and Saved Books</SectionTitle>
				{savedBooksContext.savedBooks ? (
					<ChallengesList />
				) : (
					<Typography
						variant="h5"
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							color: "primary.dark",
						}}
					>
						No Book Saved Yet!
					</Typography>
				)}
			</Box>
		</div>
	);
}

export default Challenges;
