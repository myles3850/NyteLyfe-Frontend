import { Route, Routes } from "react-router-dom";
import { Supabase } from "../../components/logic/Supabase";
import LoginScreen from "../auth/Login";
import SignupComplete from "../auth/SignUpComplete";
import AddMedication from "./AddMeds/MewMedication";
import Medications from "./AllMeds";
import UserSettings from "./UserSettings";

function AccountPage() {
	return <div>
		<p>account home page</p>
	</div>
}

function Account() {
	return (
		<div className="account_section">
			<Routes>
				<Route path='/' element={<Medications />}></Route>
				<Route path="/medications/*" element={<Medications />} />
				<Route path='/settings' element={<AddMedication />} />
				<Route path="signupConfirmation/" element={<SignupComplete />} />

			</Routes>
			<button onClick={() => Supabase.auth.signOut()}>log off</button>
		</div>
	);
}

export default Account;
