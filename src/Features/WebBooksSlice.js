import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	data: [],
	error: "",
};

export const fetchWebBooks = createAsyncThunk("books/fetchBooks", async () => {
	const response = await axios.get(
		`https://www.googleapis.com/books/v1/volumes?q=web-development&langRestrict=en&maxResults=40&key=${
			import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
		}`
	);
	return response.data;
});

const WebBooksSlice = createSlice({
	name: "books",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchWebBooks.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchWebBooks.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = "";
		});
		builder.addCase(fetchWebBooks.rejected, (state, action) => {
			state.loading = false;
			state.data = [];
			state.error = action.error.message;
		});
	},
});

export default WebBooksSlice.reducer;
