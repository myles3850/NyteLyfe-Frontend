import { Route, Routes } from "react-router-dom";
import LoginScreen from "../auth/Login";
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
				<Route path='/' element={<LoginScreen />}></Route>
				<Route path="/medications" element={<Medications />} />
				<Route path='/settings' element={<AddMedication />} />
			</Routes>
		</div>
	);
}

export default Account;
