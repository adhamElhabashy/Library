import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import { SavedBooksProvider } from "./Context/SavedBooksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<Provider store={store}>
		<SavedBooksProvider>
			<App />
		</SavedBooksProvider>
	</Provider>
	// </React.StrictMode>,
);
