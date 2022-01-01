import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

function Navigation() {
	return (
		<nav className={classes.Navigation}>
			<div className={classes.dropdown_left}>
				<h2 className={classes.dropbtn}>PillPoppers</h2>
				<div className={classes.dropdown_content}>
					<Link to="/">Home</Link>
					<Link to="About">About</Link>
					<Link to="creator">Creator</Link>
					<Link to='account'>My Profile</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
