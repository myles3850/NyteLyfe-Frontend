import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Supabase } from "../../components/logic/Supabase";

function LoginScreen() {
	const [credentials, setCredentials] = useState("");
	let navigate = useNavigate();

	function handleAuthCheck(error) {
		!error
			? navigate("/account", { replace: true })
			: console.log(error.message);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		let { user, error } = await Supabase.auth.signIn({
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
			<form onSubmit={handleSubmit}>
				<label>
					<p>Username</p>
					<input type="text" id="user" onChange={handleUpdate} />
				</label>
				<label>
					<p>Password</p>
					<input type="password" id="pass" onChange={handleUpdate} />
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
