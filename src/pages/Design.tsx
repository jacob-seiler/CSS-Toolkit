import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Header, CardManager } from "../components";

const Design: React.FC = () => {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col>
						<CardManager />
					</Col>
					<Col>
						<p>TODO</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Design;
