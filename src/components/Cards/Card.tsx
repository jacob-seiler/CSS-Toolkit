import React from "react";

export interface CardData {
	id: number;
	title: string;
	visible: boolean;
	data: string[];
}

interface CardProps {
	cardData: CardData;
	remove: (id: number) => void;
}

const Card: React.FC<CardProps> = (props) => {
	return (
		<div className="card">
			{props.cardData.title + " - " + props.cardData.id}{" "}
			<div onClick={() => props.remove(props.cardData.id)}>Remove</div>
		</div>
	);
};

export default Card;
