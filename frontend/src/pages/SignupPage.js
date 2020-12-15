import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SignupPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const createUser = async (evt) => {
		evt.preventDefault();
		if (password !== confirmPassword) {
			return;
		}
		const response = await fetch("/api/users/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}), // body data type must match "Content-Type" header
		});

		window.location.href = "/";
		console.log("Please create a account", response);
	};

	return (
		<Card border="info" style={{ width: "36rem" }} role="main">
			<Card.Header>
				<Card.Title>Create an account now 🪴</Card.Title>
			</Card.Header>
			<Card.Body>
				{" "}
				<Form onSubmit={createUser}>
					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="username"
							placeholder="Username"
							value={username}
							onChange={(evt) => setUsername(evt.target.value)}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(evt) => setPassword(evt.target.value)}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							value={confirmPassword}
							onChange={(evt) =>
								setConfirmPassword(evt.target.value)
							}
						/>
					</Form.Group>

					<Button variant="outline-dark" type="submit">
						Create account
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
}

export default SignupPage;
