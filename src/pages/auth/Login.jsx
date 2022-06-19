import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginUser from "../../components/logic/serverConnection";
import { Supabase } from "../../components/logic/Supabase";

function LoginScreen() {
	const [credentials, setCredentials] = useState("");
	let navigate = useNavigate();

	function handleAuthCheck(error) {
		!error ? navigate("/account", { replace: true }) : alert(error.message);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		let { error } = await Supabase.auth.signIn({
			email: credentials.user,
			password: credentials.pass,
		});
		handleAuthCheck(error);
	}

	function handleUpdate(e) {
		let name = e.target.id;
		let value = e.target.value;
		setCredentials((values) => ({ ...values, [name]: value }));
	}

	return (
		<div>
			<form onSubmit={loginUser}>
				<label>
					<p>Email Address</p>
					<input type="text" id="user" onChange={handleUpdate} required />
				</label>
				<label>
					<p>Password</p>
					<input type="password" id="pass" onChange={handleUpdate} required />
				</label>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
			<Link to="/signup"> or Sign Up</Link>
		</div>
	);
}

export default LoginScreen;
