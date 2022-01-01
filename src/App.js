import { Route, Routes } from "react-router-dom";

import Navigation from "./components/interface/Navigation";
import About from "./pages/public/About";
import Creator from "./pages/public/Creator";
import Home from "./pages/public/Home";
import Account from "./pages/private/Account";

import "./App.css";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="creator" element={<Creator />} />
				<Route path="account/*" element={<Account />} />
			</Routes>
		</div>
	);
}

export default App;
