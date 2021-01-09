import React, { useState } from "react";
import AddCardButton from "./AddCardButton";
import Card, { CardData } from "./Card";

const CardManager: React.FC = () => {
	const [cards, setCards] = useState<CardData[]>([]);
	const [cardCount, setCardCount] = useState<number>(0);

	const addCard = (data: CardData) => {
		const newCards: CardData[] = JSON.parse(JSON.stringify(cards));
		newCards.push(data);
		setCards(newCards);
		setCardCount(cardCount + 1);
	};

	const removeCard = (id: number) => {
		let newCards: CardData[] = JSON.parse(JSON.stringify(cards));
		newCards = newCards.filter((data: CardData) => {
			return data.id !== id;
		});
		setCards(newCards);
	};

	return (
		<>
			<h1>Customize</h1>
			{cards.map((data: CardData) => {
				return <Card key={data.id} cardData={data} remove={removeCard} />;
			})}
			<AddCardButton add={addCard} count={cardCount} />
		</>
	);
};

export default CardManager;
