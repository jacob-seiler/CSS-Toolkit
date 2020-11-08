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
					<Col style={{ paddingRight: "0" }}>
						<div style={{ backgroundColor: "#f3f3f3", height: "100%", width: "100%" }}>
							Controls
						</div>
					</Col>
					<Col style={{ paddingLeft: "0" }}>
						<Display />
						<Code />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Design;
