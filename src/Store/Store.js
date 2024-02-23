import { configureStore } from "@reduxjs/toolkit";
import WebBooksReducer from "../Features/WebBooksSlice";
import BooksSearchReducer from "../Features/BooksSearchSlice";

const store = configureStore({
	reducer: { books: WebBooksReducer, booksSearch: BooksSearchReducer },
});

export default store;
