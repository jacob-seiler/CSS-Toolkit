import React from "react";
import { CardData } from "./Card";

interface AddCardButtonProps {
	add: (data: CardData) => void;
	count: number;
}

const AddCardButton: React.FC<AddCardButtonProps> = (props) => {
	const addCard = () => {
		let temp: CardData = {
			id: props.count,
			title: "Temp",
			visible: true,
			data: [],
		};

		props.add(temp);
	};

	return (
		<div className="addCardButton" onClick={() => addCard()}>
			Add another component
		</div>
	);
};

export default AddCardButton;
