import { Card } from "@/types";
import Image from "next/image";

interface Props {
  card: Card;
  onClick: () => void;
}

export const CardItem = ({ card, onClick }: Props) => {
  const { name, supertype, number, rarity, images, types} = card;

  return (
    <div className="mx-auto right-0 mt-6 w-72 h-96 relative cursor-pointer" onClick={onClick}>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 rounded-lg overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-100 opacity-90">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-900/80 border-b-4 border-yellow-500">
          
          {/* Número */}
          <p className="absolute pl-1 top-2 left-2 text-xl text-yellow-400">{number}</p>
          
          {/* Nombre */}
          <p className="pt-2 text-xl font-bold text-white capitalize">{name}</p>
          
          {/* Imagen */}
          <div className="pt-2 mb-4">
            <Image
              src={`${images?.[0]?.url}`}
              alt={`${name}`}
              width={150}
              height={50}
              className="rounded-lg shadow-lg mx-auto"
              priority={false}
            />
          </div>
          
          {/* Supertipo, Tipo y Rareza */}
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{supertype}</p>
          <p className="pt-2 text-md font-semibold text-yellow-400">{rarity}</p>
          <p className="pt-2 text-md font-semibold text-pink-600">{types}</p>
        </div>
      </div>
    </div>
  );
};
