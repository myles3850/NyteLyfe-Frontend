import { Route, Routes, useNavigate } from "react-router-dom";
import { Supabase } from "../../components/logic/Supabase";
import SignupComplete from "../auth/SignUpComplete";
import AddMedication from "./AddMeds/MewMedication";
import Medications from "./AllMeds";
import UserSettings from "./UserSettings";

function AccountPage() {
	return (
		<div>
			<h3>Account Home page</h3>
			<p>
				this page will contain links and infomration on quick stats for
				your medication as well as a way to quickly mark them as taken
			</p>
		</div>
	);
}

function AccountRouting() {
	let navigate = useNavigate();

	function handleSignOut() {
		Supabase.auth.signOut();
		navigate("/");
	}

	return (
		<div className="account_section">
			<Routes>
				<Route path="/" element={<AccountPage />}></Route>
				<Route path="/medications/*" element={<Medications />} />
				<Route path="/settings" element={<UserSettings />} />
				<Route
					path="signupConfirmation/"
					element={<SignupComplete />}
				/>
			</Routes>
			<button onClick={handleSignOut}>log off</button>
		</div>
	);
}

export default AccountRouting;
