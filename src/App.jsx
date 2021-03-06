import { Route, Routes } from "react-router-dom";

import "./App.css";

import Navigation from "./components/interface/Navigation";

import About from "./pages/public/About";
import Creator from "./pages/public/Creator";
import Home from "./pages/public/Home";
import SignUpScreen from "./pages/auth/SignUp";
import LoginScreen from "./pages/auth/Login";
import AccountHome from "./pages/private/Account";
import Medications from "./pages/private/Medications/AllMeds";
import SignupComplete from "./pages/auth/SignUpComplete";
import AddMedication from "./pages/private/Medications/NewMedication";
import UserSettings from "./pages/private/settings/UserSettings";
import Medication from "./pages/private/Medications/SingleMed";
import FullMedRecording from "./pages/private/Recording/RecordTaken";


function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="creator" element={<Creator />} />
				<Route path="account">
					<Route index element={<AccountHome />} />
					<Route path=':medicationId' element={<FullMedRecording />} />
					<Route path="medications">
						<Route index element={<Medications />} />
						<Route path=":medicationId" element={<Medication />} />
						<Route path="new" element={<AddMedication />} />
					</Route>
					<Route path="history" element={<SignupComplete />} />
					<Route path="settings" element={<UserSettings />} />
				</Route>
				<Route path="signup">
					<Route index element={<SignUpScreen />} />
					<Route path="Confirmation" element={<SignupComplete />} />
				</Route>
				<Route path="login" element={<LoginScreen />} />
			</Routes>
		</div>
	);
}

export default App;
