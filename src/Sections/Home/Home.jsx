import React from "react";
import Landing from "../Landing/Landing";
import Topic from "../Topic/Topic";
import Search from "../Search/Search";
import Challenges from "../Challenges/Challenges";

function Home() {
	return (
		<>
			<Landing />
			<Topic />
			<Challenges />
			<Search />
		</>
	);
}

export default Home;
