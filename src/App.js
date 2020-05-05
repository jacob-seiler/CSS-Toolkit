import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

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
