import React from "react";
import "./App.css";
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Sections/Home/Home";
import Search from "./Sections/Search/Search";
import Challenges from "./Sections/Challenges/Challenges";
import BookPage from "./Components/BookPage/BookPage";
import Topic from "./Sections/Topic/Topic";
import Settings from "./Sections/Settings/Settings";
import NoPageFound from "./Sections/NoPageFound/NoPageFound";

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
				<Route path="/Library/" element={<Home />} />
				<Route path="/Library/favourite" element={<Topic />} />
				<Route path="/Library/search" element={<Search />} />
				<Route path="/Library/saved-books" element={<Challenges />} />
				<Route path="/Library/books/:bookId" element={<BookPage />} />
				<Route path="/Library/settings" element={<Settings />} />
				<Route path="*" element={<NoPageFound />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
