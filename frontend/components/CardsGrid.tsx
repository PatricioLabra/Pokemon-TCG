"use client"

import { useState } from "react";
import { Card } from "@/types";
import { CardItem } from "./CardItem";
import { CardItemDetail } from "./CardItemDetail";

interface Props {
  cards: Card[];
}

export const CardsGrid = ({ cards }: Props) => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const openCardDetail = (card: Card) => {
    setSelectedCard(card);
  };

  const closeCardDetail = () => {
    setSelectedCard(null);
  };

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} onClick={() => openCardDetail(card)} />
      ))}

      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeCardDetail}
        >
          <div
            className="bg-gray-900/95 relative rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CardItemDetail card={selectedCard} />
            <button
              className="absolute top-2 right-2 text-xl text-white-600 p-3"
              onClick={closeCardDetail}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
