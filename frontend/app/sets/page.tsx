import { getSets } from "@/api";
import { Set } from "@/types";
import { SetGrid } from "@/components/SetGrid";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  try {
    const sets: Set[] = await getSets();

    // Generar palabras clave dinámicas a partir de los sets
    const keywords = sets.map(set => `${set.name}, ${set.series}, ${set.ptcgo_code}`).join(", ");

    return {
      title: "Card Sets Collection",
      description: "Explore a wide range of card sets with detailed information and colorful visuals.",
      keywords: keywords,
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error("Error obteniendo información de sets", error);

    return {
      title: "Card Sets Collection",
      description: "Explore a wide range of card sets with detailed information and colorful visuals.",
      keywords: "card sets, pokemon, collection",
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}

export default async function SetsPage() {
  const sets: Set[] = await getSets();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600  text-white py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-6">
          Card Sets Collection
        </h1>

        {/* Descripción */}
        <p className="text-lg text-gray-300 mb-8">
          Explore a wide range of card sets with detailed information and colorful visuals.
        </p>

        {/* Grid de Sets */}
        <SetGrid sets={sets} />
      </div>
    </div>
  );
}
