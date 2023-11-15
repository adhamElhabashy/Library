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
import { fetchBooks } from "./Features/BooksSlice";

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
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchBooks());
	}, []);
	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>
			<Header />
			<Landing />
		</ThemeProvider>
	);
}

export default App;
