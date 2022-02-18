import { useNavigate } from "react-router-dom";
let navigate = useNavigate();

export default function HandleErrorCheck(error, redirect) {

	!error ? navigate(redirect, { replace: true }) : alert(error.message);
}
