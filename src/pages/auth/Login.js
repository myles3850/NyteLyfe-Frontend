import { useState } from "react";
import { Supabase } from "../../components/logic/Supabase";

function LoginScreen() {
	const [credentials, setCredentials] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		let { user, error } = await Supabase.auth.signIn({
			email: credentials.user,
			password: credentials.pass,
		});

		console.log(user, error);
	}

	function handleUpdate(e) {
		let name = e.target.id;
		let value = e.target.value;
		setCredentials((values) => ({ ...values, [name]: value }));
	}

	return (
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
	);
}

export default LoginScreen;
