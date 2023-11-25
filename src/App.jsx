import React from "react";
import "./App.css";
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles";
import Header from "./Components/Header/Header";
import Landing from "./Sections/Landing/Landing";
import Topic from "./Sections/Topic/Topic";
import Search from "./Sections/Search/Search";

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
	// this is a temporary dispatch
	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>
			<Header />
			<Landing />
			<Topic />
			<Search />
		</ThemeProvider>
	);
}

export default App;
