import { getCards } from "@/api";
import { Card } from "@/types";
import { CardsGrid } from "@/components/CardsGrid";
import Link from "next/link";
import { TbPokeball } from "react-icons/tb";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>
}

/* Generación de la metadata con las cartas del set */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

    try {
      const cards: Card[] = await getCards(id);
      const keywords = cards.map(card => `${card.name}, ${card.supertype}, ${card.rarity || "rare"}`).join(", ");
  
      return {
        title: `Card Collection for Set ${id}`,
        description: `Discover the cards available in this set. Explore types, rarities, and more!`,
        keywords: keywords,
        robots: {
          index: true,
          follow: true,
        },
      };
    } catch (error) {
      console.error("Error obteniendo información de las cartas", error);
  
      return {
        title: "Card Collection",
        description: "Explore a variety of collectible cards. View details, types, and rarities.",
        keywords: "pokemon cards, collectible, rare cards",
        robots: {
          index: true,
          follow: true,
        },
      };
    }
  }

export default async function CardsPage({ params }: Props) {
    const id = (await params).id;
    const cards: Card[] = await getCards(id);

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600  text-white py-10 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <div className=" flex text-4xl font-bold text-white">
                    <Link href="/sets" >
                        <TbPokeball />
                    </Link>
                </div>

                {/* Título */}
                <h1 className="text-4xl font-extrabold text-yellow-400 mb-6">
                    Card Collection
                </h1>

                {/* Descripción */}
                <p className="text-lg text-gray-300 mb-8">
                    Discover the cards available in this collection. Click on a card for more details!
                </p>

                {/* Grid de Cards */}
                <CardsGrid cards={cards} />
            </div>
        </div>
    );
}
