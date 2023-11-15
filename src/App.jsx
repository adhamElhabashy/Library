import React, { useEffect } from "react";
import "./App.css";
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles";
import { useDispatch } from "react-redux";
import Header from "./Components/Header/Header";
import Landing from "./Sections/Landing/Landing";
import { fetchWebBooks } from "./Features/WebBooksSlice";
import Topic from "./Sections/Topic/Topic";

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
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchWebBooks());
	}, []);
	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>
			<Header />
			<Landing />
			<Topic />
		</ThemeProvider>
	);
}

export default App;
