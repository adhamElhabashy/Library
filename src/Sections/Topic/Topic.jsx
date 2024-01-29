import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import BooksOfTopic from "./BooksOfTopic/BooksOfTopic";

function Topic() {
	return (
		<div
			className="topic"
			style={{ paddingTop: "100px", paddingBottom: "100px" }}
		>
			<SectionTitle>Web Development</SectionTitle>
			<BooksOfTopic />
		</div>
	);
}

export default Topic;
