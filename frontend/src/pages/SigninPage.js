import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SigninPage(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		// This function received the values from the form
		// The line below extract the two fields from the values object.

		const body = {
			username: username,
			password: password,
		};
		console.log(body);
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(body),
		};

		try {
			const response = await fetch("/api/auth/login", options);
			const success = await response.json();
			console.log(
				"file: SigninPage.js ~ line 36 ~ handleSubmit ~ success",
				success
			);

			if (success) {
				window.location.href = "/";
			} else {
				alert("Login Failed try again");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Card border="info" style={{ width: "36rem" }} role="main">
			<Card.Header>
				<Card.Title>
					Sign in to add your comments to each post 💬
				</Card.Title>
			</Card.Header>
			<Card.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="username"
							placeholder="Username"
							value={username}
							onChange={(evt) => setUsername(evt.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(evt) => setPassword(evt.target.value)}
						/>
					</Form.Group>

					<Button variant="outline-dark" type="submit">
						Sign in
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
}

export default SigninPage;
