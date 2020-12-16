import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";

function Navigation({ user }) {
	const signOut = async () => {
		const response = await fetch("/api/auth/logout");
		if (response.ok) {
			window.location.href = "/";
		}
	};

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">
				<h1>Find your next home! 🏡</h1>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<Nav.Link href="/">
						<Button variant="light">Home</Button>
					</Nav.Link>
					{user ? (
						<Nav.Link>
							<Button variant="light" onClick={signOut}>
								Sign out
							</Button>
						</Nav.Link>
					) : (
						<Nav>
							<Nav.Item>
								<Nav.Link>
									<Link to={"/signup"}>
										<Button variant="light">Sign up</Button>
									</Link>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link>
									<Link to={"/signin"}>
										{" "}
										<Button variant="light">Sign in</Button>
									</Link>
								</Nav.Link>
							</Nav.Item>
						</Nav>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
