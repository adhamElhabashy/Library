import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../Features/BooksSlice";

const store = configureStore({ reducer: { books: BooksReducer } });

export default store;
