import React from "react";
import ChallengesList from "./ChallengesList/ChallengesList";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

function Challenges() {
	return (
		<div className="challenges">
			<SectionTitle>Your Challenges and Saved Books</SectionTitle>
			<ChallengesList />
		</div>
	);
}

export default Challenges;
