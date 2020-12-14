import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import React from "react";

function Navigation({ user }) {
	const signOut = async () => {
		const response = await fetch("/api/auth/logout");
		if (response.ok) {
			window.location.href = "/";
		}
	};

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Find your next home! 🏡</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="justify-content-end">
					<Nav.Link href="/">Home</Nav.Link>
					{user ? (
						<Nav.Link>
							<Button onClick={signOut}>Sign out</Button>
						</Nav.Link>
					) : (
						<div>
							<Nav.Link href="/signup">Sign up</Nav.Link>{" "}
							<Nav.Link href="/signin">Sign in</Nav.Link>
						</div>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
