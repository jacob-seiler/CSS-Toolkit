import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Jumbotron from "react-bootstrap/esm/Jumbotron";
import { Link } from "react-router-dom";

const About: React.FC = () => {
	return (
		<>
			<Jumbotron fluid>
				<Container>
					<h1 className="display-1">About</h1>
					<Link to="/">
						<Button variant="primary">Go home</Button>
					</Link>
				</Container>
			</Jumbotron>
			<Container>
				<p className="lead">
					CSS Toolkit is a web application for designing and styling CSS components using
					interactive tools.
				</p>
				<p>Info about CSS</p>
				<p>contact us info</p>
			</Container>
		</>
	);
};

export default About;
