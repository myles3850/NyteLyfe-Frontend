import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Supabase } from "../logic/Supabase";

import classes from "./Navigation.module.css";

function Navigation() {
	let location = useLocation().pathname;
	let user = Supabase.auth.user();
	let navigate = useNavigate();


	function handleSignOut() {
		Supabase.auth.signOut();
		navigate("/");
	}


	if (location.indexOf("/account") > -1) {
		return (
			<Navbar expand="lg">
				<Container fluid>
					<Navbar.Brand as={Link} to="/">
						Pillpopperz
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
							{user ? (
								<Nav className="me-auto">
									<Nav.Link as={Link} to="account">
										Home
									</Nav.Link>
									<Nav.Link as={Link} to="account/medications">
										Medications
									</Nav.Link>
									<Nav.Link as={Link} to="account/history">
										Medication History
									</Nav.Link>
								</Nav>
							) : (
								<Nav className="me-auto">
									<Nav.Link as={Link} to="/">
										Home
									</Nav.Link>
									<Nav.Link as={Link} to="About">
										About
									</Nav.Link>
									<Nav.Link as={Link} to="Creator">
										Creater
									</Nav.Link>
								</Nav>
							)}
					</Navbar.Collapse>
					<Navbar.Collapse className="justify-content-end">
						<NavDropdown title={user ? user.email : "account"} id="basic-nav-dropdown" align="end">
							{user ? (
								<Container fluid>
									<NavDropdown.Item as={Link} to="/account">
										Account
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to='account/settings'>Settings</NavDropdown.Item>
									<NavDropdown.Item onClick={handleSignOut}>Logout</NavDropdown.Item>
								</Container>
							) : (
								<Container fluid>
									<NavDropdown.Item as={Link} to="login">
										Login
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="signup">
										Register
									</NavDropdown.Item>
								</Container>
							)}
						</NavDropdown>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	} else {
		return (
			<Navbar expand="lg">
				<Container fluid>
					<Navbar.Brand as={Link} to="/">
						Pillpopperz
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="About">
								About
							</Nav.Link>
							<Nav.Link as={Link} to="Creator">
								Creater
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse className="justify-content-end">
						<NavDropdown title={user ? user.email : "account"} id="basic-nav-dropdown" align="end">
							{user ? (
								<Container fluid>
									<NavDropdown.Item as={Link} to="/account">
										Account
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
								</Container>
							) : (
								<Container fluid>
									<NavDropdown.Item as={Link} to="login">
										Login
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="signup">
										Register
									</NavDropdown.Item>
								</Container>
							)}
						</NavDropdown>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default Navigation;
