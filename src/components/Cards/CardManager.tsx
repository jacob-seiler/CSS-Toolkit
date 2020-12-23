import React from "react";
import AddCardButton from "./AddCardButton";

const CardManager: React.FC = () => {
	/*
    - title
    - 3 dots
    - cards
    -add another
    */
	return (
		<>
			<h1>Customize</h1>
			<AddCardButton />
		</>
	);
};

export default CardManager;
