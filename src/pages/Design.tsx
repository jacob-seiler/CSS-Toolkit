import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const Design: React.FC = () => {
	return (
		<Container>
			<h1 className="display-1">Design</h1>
			<Link to="/about">
				<Button>Go to about</Button>
			</Link>
		</Container>
	);
};

export default Design;
