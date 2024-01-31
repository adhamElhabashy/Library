import React from "react";
import "./App.css";
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Sections/Home/Home";
import Search from "./Sections/Search/Search";
import Challenges from "./Sections/Challenges/Challenges";
import Topic from "./Sections/Topic/Topic";
import Settings from "./Sections/Settings/Settings";

const theme = createTheme({
	palette: {
		primary: { main: "rgba(195, 134, 84, 0.15)", dark: "#C38654" },
		secondary: { main: "rgba(0, 0, 0, 0.49)" },
	},
	typography: {
		fontFamily: '"Roboto", sans-serif',
	},
});

function App() {
	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favourite" element={<Topic />} />
				<Route path="/search" element={<Search />} />
				<Route path="/saved-books" element={<Challenges />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
			{/* <Outlet /> */}
		</ThemeProvider>
	);
}

export default App;
