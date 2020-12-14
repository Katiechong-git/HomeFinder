import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

		console.log("Please create a account", response);
	};

	return (
		<div>
			<h1>Create an account</h1>
			<Form onSubmit={createUser}>
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
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(evt) => setConfirmPassword(evt.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Create account
				</Button>
			</Form>
		</div>
	);
}

export default SignupPage;
