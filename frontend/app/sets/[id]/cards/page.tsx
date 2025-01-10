import { getCards } from "@/api";
import { Card } from "@/types";
import { CardsGrid } from "@/components/CardsGrid";
import { Navbar } from "@/components/NavBar";

interface Props {
    params: { id: string };
}

export default async function CardsPage({ params }: Props) {
    const { id } = params;
    const cards: Card[] = await getCards(id);

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600  text-white py-10 px-4">
            <Navbar/>
            <div className="max-w-7xl mx-auto text-center">
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
