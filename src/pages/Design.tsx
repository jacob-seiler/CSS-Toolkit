import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Jumbotron from "react-bootstrap/esm/Jumbotron";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

const Design: React.FC = () => {
	return (
		<>
			<Jumbotron>
				<Container>
					<h1 className="display-1">Design</h1>
					<Link to="/about">
						<Button>Go to about</Button>
					</Link>
				</Container>
			</Jumbotron>
			<Container>
				<Row>
					<Col>
						<p>Controls</p>
					</Col>
					<Col>
						<Row>
							<Col>
								<p>Display</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<p>Code</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Design;
