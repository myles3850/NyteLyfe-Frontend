import { useState } from "react";
import { Link } from "react-router-dom";
import { Supabase } from "../../components/logic/Supabase";
import HandleErrorCheck from "../../components/logic/ValidationCheck";

function SignUpScreen() {
	const [credentials, setCredentials] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		let { error } = await Supabase.auth.signUp({
			email: credentials.user,
			password: credentials.pass,
		});

		HandleErrorCheck(error, "confirmation");
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
					<p>Email Address</p>
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
			<Link to="/login"> or Log In</Link>
		</div>
	);
}

export default SignUpScreen;
