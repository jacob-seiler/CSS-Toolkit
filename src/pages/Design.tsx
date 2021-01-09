import React from "react";
import { CardManager, Editor, Preview } from "../components";
import "./pages.scss";

const Design: React.FC = () => {
	return (
		<>
			<Preview />
			<Editor />
			<CardManager />
		</>
	);
};

export default Design;
