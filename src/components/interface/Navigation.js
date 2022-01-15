import { Link, useLocation, useNavigate } from "react-router-dom";
import { Supabase } from "../logic/Supabase";

import classes from "./Navigation.module.css";

function Navigation() {
	let location = useLocation().pathname;

	if (location.indexOf("/account") > -1) {
		return (
			<nav className={classes.Navigation}>
				<div className={classes.dropdown}>
					<Link to="/">
						<h2 className={classes.dropbtn}>Pill Popperz</h2>
					</Link>
					<div className={classes.dropdown_content}>
						<Link to={Supabase.auth.user() ? "account" : "login"} >Home</Link>
						<Link to={Supabase.auth.user() ? "account/medications" : "login"}>Medication</Link>
						<Link to={Supabase.auth.user() ? "account/history" : "login"} >History</Link>
						<Link to={Supabase.auth.user() ? "account/settings" : "login"} >Settings</Link>
					</div>
				</div>
			</nav>
		);
	} else {
		return (
			<nav className={classes.Navigation}>
				<div className={classes.dropdown}>
					<Link to="/">
						<h2 className={classes.dropbtn}>Pill Popperz</h2>
					</Link>
					<div className={classes.dropdown_content}>
						<Link to="/">Home</Link>
						<Link to="About">About</Link>
						<Link to="creator">Creator</Link>
						<Link to={Supabase.auth.user() ? "account" : "login"}>Your Account</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navigation;
