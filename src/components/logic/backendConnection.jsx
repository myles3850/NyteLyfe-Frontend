import axios from 'axios';

export default async function apiRequest(url, method, params, data) {
	e.preventDefault();
	
	await axios{
		url: url,
		method: method,
		baseURL: process.env.API_ADRESS,
		if (params){
			params: params
		}
	}
	
	await axios
		.post('https://nytelyfe-backend-staging.herokuapp.com/auth/login', {
			email: 'myles@m.co',
			password: 'apple',
		})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
}
