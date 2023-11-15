import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import BooksOfTopic from "./BooksOfTopic/BooksOfTopic";

function Topic() {
	return (
		<div className="topic">
			<SectionTitle />
			<BooksOfTopic />
		</div>
	);
}

export default Topic;
