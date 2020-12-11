import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignupPage() {
	const [email, setEmail] = useState("");

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<h1>Create an account</h1>
			<Form>
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

				<Button
					variant="primary"
					type="submit"
					onClick={async (evt) => {
						// evt.preventDefault();

						const response = await fetch("/api/users/create", {
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

						console.log("Please create a account", response);
					}}
				>
					Create account
				</Button>
			</Form>
		</div>
	);
}

export default SignupPage;
