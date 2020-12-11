import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Home from "./pages/Home.js";

import PostDetails from "./pages/PostDetails.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/posts/:postId" exact>
					<PostDetails />
				</Route>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
