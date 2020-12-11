import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SigninPage(props) {
	return (
		<Form>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
			</Form.Group>
			<Form.Group controlId="formBasicUsername">
				<Form.Label>Username</Form.Label>
				<Form.Control type="username" placeholder="Username" />
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default SigninPage;
