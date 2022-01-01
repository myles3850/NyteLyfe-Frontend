import { Route, Routes } from "react-router-dom";
import Medications from "./AllMeds";
import UserSettings from "./UserSettings";

function AccountPage() {
	return <div>
		<p>account home page</p>
	</div>
}

function Account() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<AccountPage />}></Route>
				<Route path="/medications" element={<Medications />} />
				<Route path='/settings' element={<UserSettings />} />
			</Routes>
		</div>
	);
}

export default Account;
