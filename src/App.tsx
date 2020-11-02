import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
import { About, Design } from "./pages";

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/about" exact={true}>
					<About />
				</Route>
				<Route path="/" exact={true}>
					<Design />
				</Route>
				<Redirect path="/" exact={false} to="/" />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
