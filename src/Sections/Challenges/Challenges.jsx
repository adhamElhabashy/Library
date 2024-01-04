import React from "react";
import ChallengesList from "./ChallengesList/ChallengesList";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Box } from "@mui/material";

function Challenges() {
	return (
		<div className="challenges">
			<Box sx={{ marginTop: "50px", bgcolor: "primary.main" }}>
				<SectionTitle>Your Challenges and Saved Books</SectionTitle>
				<ChallengesList />
			</Box>
		</div>
	);
}

export default Challenges;
