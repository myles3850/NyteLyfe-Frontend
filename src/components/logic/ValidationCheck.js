import { useNavigate } from "react-router-dom";

export default function HandleErrorCheck(error, redirect) {
	let navigate = useNavigate();

	!error ? navigate(redirect, { replace: true }) : alert(error.message);
}
