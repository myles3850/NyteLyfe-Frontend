import axios from "axios";


export default async function loginUser(e) {
	e.preventDefault();
	await axios.post("https://nytelyfe-backend-staging.herokuapp.com/auth/login",{
		email:"myles@m.co",
		password:"apple"
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
}