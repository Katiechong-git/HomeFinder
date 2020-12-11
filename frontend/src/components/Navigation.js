import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Find your next home! 🏡</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="justify-content-end">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/signup">Sign up</Nav.Link>
					<Nav.Link href="/signin">Sign in</Nav.Link>
					<Nav.Link href="/signout">Sign out</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
