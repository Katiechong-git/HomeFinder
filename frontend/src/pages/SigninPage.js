import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function SigninPage(props) {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	// The useHistory hook gives you access to the history instance that you may use to navigate.
	// its like a link object but dont need a visual component on screen
	let history = useHistory();

	const handleSubmit = async (values) => {
		// This function received the values from the form
		// The line below extract the two fields from the values object.
		const { email, username, password } = values;
		var body = {
			email: email,
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
			const user = await response.json();
			// if we found the user based on the password/email values, then we set the user id to be in local storage
			// and make the page go back to home page (but log in)
			// Local Storage is a Web API native to modern web browsers.
			// It allows websites/apps to store data (simple and limited) in the browser, making that data available in future browser sessions.
			if (user) {
				localStorage.setItem("_id", user._id);
				history.push("/");
			} else {
				alert("Login Failed try again");
			}
		} catch (error) {
			console.error(error);
		}
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
