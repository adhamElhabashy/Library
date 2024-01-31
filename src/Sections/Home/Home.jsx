import React from "react";
import Header from "../../Components/Header/Header";
import Landing from "../Landing/Landing";
import Topic from "../Topic/Topic";
import Search from "../Search/Search";
import Challenges from "../Challenges/Challenges";

function Home() {
	return (
		<>
			<Header />
			<Landing />
			<Topic />
			<Challenges />
			<Search />
		</>
	);
}

export default Home;
