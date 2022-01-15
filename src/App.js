import { Route, Routes } from "react-router-dom";

import Navigation from "./components/interface/Navigation";

import About from "./pages/public/About";
import Creator from "./pages/public/Creator";
import Home from "./pages/public/Home";
import SignUpScreen from "./pages/auth/SignUp";
import LoginScreen from "./pages/auth/Login";
import AccountHome from "./pages/private/Account";
import Medications from "./pages/private/AllMeds";
import SignupComplete from "./pages/auth/SignUpComplete";
import AddMedication from "./pages/private/AddMeds/MewMedication";
import UserSettings from "./pages/private/UserSettings";

import "./App.css";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="creator" element={<Creator />} />
				<Route path="account/*" element={<AccountHome />}>
					<Route index element={<AccountHome />}></Route>
					<Route path="medications" element={<Medications />}>
						<Route path="new" element={<AddMedication />} />
					</Route>
					<Route path="history" element={<SignupComplete />} />
					<Route path="settings" element={<UserSettings />} />
					<Route
						path="signupConfirmation"
						element={<SignupComplete />}
					/>
				</Route>
				<Route path="signup" element={<SignUpScreen />} />
				<Route path="login" element={<LoginScreen />} />
			</Routes>
		</div>
	);
}

export default App;
