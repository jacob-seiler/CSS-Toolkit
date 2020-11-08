import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Header, Display, Code } from "../components";

const Design: React.FC = () => {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col>
						<p>Controls</p>
					</Col>
					<Col>
						<Row>
							<Col>
								<Display />
							</Col>
						</Row>
						<Row>
							<Col>
								<Code />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Design;
