import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SigninPage(props) {
	const [email, setEmail] = useState("");

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (evt) => {
		// evt.preventDefault();

		const response = await fetch("/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify({
				email: email,
				username: username,
				password: password,
			}), // body data type must match "Content-Type" header
		});

		console.log(response);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					value={email}
					onChange={(evt) => setEmail(evt.target.value)}
				/>
			</Form.Group>
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

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default SigninPage;
