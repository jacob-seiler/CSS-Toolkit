import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
	return (
		<div>
			<h1>About</h1>
			<Link to="/">Go home</Link>
		</div>
	);
};

export default About;
