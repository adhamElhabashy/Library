import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { loading: false, data: [], error: "" };

export const fetchBooksSearch = createAsyncThunk(
	"booksSearch/fetchBooksSearch",
	async (searchWord) => {
		const response = await axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=40&key=${
				import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
			}`
		);
		return response.data;
	}
);

const BooksSearchSlice = createSlice({
	name: "booksSearch",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchBooksSearch.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchBooksSearch.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = "";
		});
		builder.addCase(fetchBooksSearch.rejected, (state, action) => {
			state.loading = false;
			state.data = [];
			state.error = action.error.message;
		});
	},
});

export default BooksSearchSlice.reducer;
