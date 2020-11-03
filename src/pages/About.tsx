import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const About: React.FC = () => {
	return (
		<Container>
			<h1 className="display-1">About</h1>
			<Link to="/">
				<Button>Go home</Button>
			</Link>
		</Container>
	);
};

export default About;
