import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../Features/WebBooksSlice";

const store = configureStore({ reducer: { books: BooksReducer } });

export default store;
