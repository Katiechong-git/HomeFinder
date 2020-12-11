import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Home from "./pages/Home.js";
import PostDetails from "./pages/PostDetails.js";
import Navigation from "./components/Navigation.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SigninPage from "./pages/SigninPage.js";
import SignupPage from "./pages/SignupPage.js";

function App() {
	const [user, setUser] = useState(null);

	function getUser() {
		fetch("/api/auth/getUser")
			.then((res) => res.json())
			.then((_user) => {
				if (_user.username) setUser(_user.username);
			});
	}

	return (
		<Router>
			<Navigation />
			<br />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/posts/:postId" exact>
					<PostDetails />
				</Route>
				<Route path="/signup">
					<SignupPage />
				</Route>
				<Route path="/signin">
					<SigninPage />
				</Route>
				<Route path="/signout"></Route>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
