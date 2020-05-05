import React, { Component } from "react";
import "./app.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import Home from "../home/home";

class App extends Component {
	render() {
		return (
			<main>
				<Header></Header>
				<Home></Home>
				<Footer></Footer>
			</main>
		);
	}
}

export default App;
