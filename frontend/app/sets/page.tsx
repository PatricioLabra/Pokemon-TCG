import { getSets } from "@/api";
import { Set } from "@/types";
import { SetGrid } from "@/components/SetGrid";


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
