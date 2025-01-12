"use client";

import { useState } from "react";
import { Card } from "@/types";
import { CardItem } from "./CardItem";
import { CardItemDetail } from "./CardItemDetail";

interface Props {
  cards: Card[];
}

export const CardsGrid = ({ cards }: Props) => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedRarity, setSelectedRarity] = useState<string>('');

  const openCardDetail = (card: Card) => {
    setSelectedCard(card);
  };

  const closeCardDetail = () => {
    setSelectedCard(null);
  };

  const filteredCards = cards.filter(card => {
    const matchesName = card.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType ? card.types?.includes(selectedType) : true;
    const matchesRarity = selectedRarity ? card.rarity === selectedRarity : true;
    
    return matchesName && matchesType && matchesRarity;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    setSelectedRarity('');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-4 mb-4 text-black">

        {/* Barra de búsqueda */}
        <div className="flex items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search for name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 w-full sm:w-auto justify-center sm:justify-start">

          {/* Filtro de type */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="p-2 w-full sm:w-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Type</option>
            <option value="Darkness">Darkness</option>
            <option value="Dragon">Dragon</option>
            <option value="Fighting">Fighting</option>
            <option value="Fire">Fire</option>
            <option value="Grass">Grass</option>
            <option value="Lightning">Lightning</option>
            <option value="Metal">Metal</option>
            <option value="Psychic">Psychic</option>
            <option value="Water">Water</option>
            <option value="Colorless">Colorless</option>
          </select>

          {/* Filtro de rarity */}
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="p-2 w-full sm:w-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Rarity</option>
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Double Rare">Double Rare</option>
            <option value="Ultra Rare">Ultra Rare</option>
            <option value="Shiny Ultra Rare">Shiny Ultra Rare</option>
            <option value="Hyper Rare">Hyper Rare</option>
            <option value="Illustration Rare">Illustration Rare</option>
            <option value="Special Illustration Rare">Special Illustration Rare</option>
            <option value="Shiny Rare">Shiny Rare</option>
            <option value="ACE SPEC Rare">ACE SPEC Rare</option>
          </select>
        </div>

        {/* Botón de reinicio de filtros */}
        <div className="w-full sm:w-auto mt-2 sm:mt-0">
          <button
            onClick={resetFilters}
            className="p-2 w-full sm:w-auto bg-gradient-to-r rounded-md from-yellow-400 via-red-500 to-pink-600 text-white shadow-xl hover:from-yellow-500 hover:via-red-600 hover:to-pink-700  hover:opacity-100"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Grid de cards */}
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {filteredCards.map((card) => (
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
    </div>
  );
};
