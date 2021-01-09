import React from "react";
import AddCardButton from "./AddCardButton";
import Card from "./Card";

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
			<Card />
			<AddCardButton />
		</>
	);
};

export default CardManager;
