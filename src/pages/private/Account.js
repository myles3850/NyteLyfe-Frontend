import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Supabase } from "../../components/logic/Supabase";

function AccountHome() {
	let navigate = useNavigate();

	function handleSignOut() {
		Supabase.auth.signOut();
		navigate("/");
	}

	return (
		<div className="account_section">
			<div>
				<h3>Account Home page</h3>
				<p>
					this page will contain links and infomration on quick stats
					for your medication as well as a way to quickly mark them as
					taken
				</p>
			</div>

			<button onClick={handleSignOut}>log off</button>
		</div>
	);
}

export default AccountHome;
