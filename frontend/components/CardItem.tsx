import Link from "next/link";
import { Card } from "@/types";
import Image from "next/image";

interface Props {
    card: Card;
}

export const CardItem = ({ card }: Props) => {
    const { id, name, supertype, number, rarity, images } = card;

    return (
        <div className="mx-auto right-0 mt-6 w-72 h-96 relative">
            <Link href={`/cards/${id}/`}>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 rounded-lg overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-900 border-b-4 border-yellow-500">
                        <p className="absolute top-2 left-2 text-xl font-bold text-white">{number}</p>
                        <p className="pt-2 text-xl font-bold text-white capitalize">{name}</p>
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
                        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{supertype}</p>
                        <p className="pt-2 text-md font-semibold text-gray-200">{rarity}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};
