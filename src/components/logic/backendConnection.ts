import axios from 'axios';

export default async function apiRequest(url: string, method: string, params?: Array<any>, data?: Array<any>) {

	let axiosConfig = {
		baseURL: process.env.API_ADDRESS,
		method: method,
		url: url,
		params: params,
		data:data
	}
	
	await axios(axiosConfig)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
}
