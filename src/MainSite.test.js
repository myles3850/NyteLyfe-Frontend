import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
	ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		document.getElementById("root")
	);
});
