import { Route, Routes } from "react-router-dom";

import Navigation from "./components/interface/Navigation";

import About from "./pages/public/About";
import Creator from "./pages/public/Creator";
import Home from "./pages/public/Home";
import SignUpScreen from "./pages/auth/SignUp";
import LoginScreen from "./pages/auth/Login";
import AccountRouting from "./pages/private/Account";

import "./App.css";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="creator" element={<Creator />} />
				<Route path="account/*" element={<AccountRouting />} />
				<Route path="signup" element={<SignUpScreen />} />
				<Route path="login" element={<LoginScreen />} />
			</Routes>
		</div>
	);
}

export default App;
