import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Navigation() {
	const signOut = async () => {
		const response = await fetch("/api/auth/logout");
		if (response.ok) {
			// history.push('/signin');
		}
	};
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Find your next home! 🏡</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="justify-content-end">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/signup">Sign up</Nav.Link>
					<Nav.Link href="/signin">Sign in</Nav.Link>
					<Nav.Link>
						<Button onClick={signOut}>Sign out</Button>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
