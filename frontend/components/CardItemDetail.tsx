import { Card } from "@/types";
import Image from "next/image";

interface Props {
    card: Card;
}

export const CardItemDetail = ({ card }: Props) => {
    const { name, supertype, number, rarity, images, markets, subtypes, types } = card;

    return (
        <div className="flex flex-wrap gap-10 items-center justify-center p-6">
            <div className="bg-gray-800 rounded-lg shadow-2xl p-6 w-72 sm:w-96 h-auto relative overflow-hidden">

                <p className="text-xl font-semibold text-white capitalize">{supertype}</p>
                <p className="text-lg font-bold text-gray-300">{name}</p>
                
                <div className="mt-4 mb-4">
                    <Image src={`${images?.[0]?.url}`} alt={`${name}`} width={200} height={300} className="rounded-lg shadow-md mx-auto" priority={false} />
                </div>

                <div className="flex justify-between items-center mt-2 text-lg font-semibold text-gray-50">
                    <p>{`#${number}`}</p>
                    <p className="text-yellow-300">{rarity}</p>
                </div>

                <div className="mt-4">
                    {subtypes?.map(subtype => (
                        <p key={subtype} className="text-sm font-semibold text-gray-400 capitalize">{subtype}</p>
                    ))}
                </div>

                <div className="mt-4">
                    {types?.map(type => (
                        <p key={type} className="text-sm font-semibold text-gray-400 capitalize">{type}</p>
                    ))}
                </div>

                <div className="mt-4">
                    {markets.map(market => (
                        <div key={market.id} className="mb-2">
                            <p className="text-md font-semibold text-gray-200">{market.market}</p>
                            <p className="text-sm text-gray-400">{market.url}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
