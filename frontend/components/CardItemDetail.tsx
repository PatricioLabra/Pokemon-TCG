import { Card, Markets } from "@/types";  // Importar el tipo de Market
import Image from "next/image";
import Button from "./Button";

interface Props {
    card: Card;
}

export const CardItemDetail = ({ card }: Props) => {
    const { name, supertype, number, rarity, images, markets, subtypes, types } = card;

    const groupedMarkets = markets.reduce((acc, market) => {
        if (market.market === "tcgplayer") {
            acc.tcgplayer.push(market);
        } else if (market.market === "cardmarket") {
            acc.cardmarket.push(market);
        }
        return acc;
    }, { tcgplayer: [] as Markets[], cardmarket: [] as Markets[] });

    return (
        <div className="flex flex-wrap m-8 items-center justify-center bg-gray-900/95 rounded-lg">
            <p className="absolute top-2 left-2 text-xl text-yellow-400 p-3">{`${number}`}</p>
            <div className="flex items-center w-full max-w-6xl">
                <div className="w-72 sm:w-96 h-auto relative overflow-hidden rounded-lg">
                    <Image src={`${images?.[0]?.url}`} alt={`${name}`} width={300} height={400} className="" priority={false} />
                </div>

                <div className="flex flex-col justify-between m-10 text-gray-200">
                    <p className="text-5xl font-bold text-white mb-2">{name}</p>

                    <div className="flex justify-between items-center mt-2 text-lg font-semibold text-gray-50">
                        <p className="text-xl font-semibold text-gray-400 capitalize">{supertype}</p>
                        <p className="text-yellow-400">{rarity}</p>
                    </div>

                    <div className="mt-4">
                        <p className="text-md font-semibold text-gray-200">Subtypes:</p>
                        <div className="flex justify-center gap-2">
                            {subtypes?.map(subtype => (
                                <p key={subtype} className="text-sm font-semibold text-gray-400 capitalize">{subtype}</p>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-md font-semibold text-gray-200">Types:</p>
                        <div className="flex justify-center gap-2">
                            {types?.map(type => (
                                <p key={type} className="text-sm font-semibold text-gray-400 capitalize">{type}</p>
                            ))}
                        </div>
                    </div>
                        
                    <div className="mt-6 space-y-4">
                        {groupedMarkets.tcgplayer.length > 0 && (
                            <div className="mb-4">
                                <p className="text-md font-semibold text-gray-200">TCGPlayer</p>
                                <div className="flex justify-center gap-2">
                                    {groupedMarkets.tcgplayer.map(market => (
                                        <Button key={market.id} href={market.url} text="View TCG" />
                                    ))}
                                </div>
                            </div>
                        )}

                        {groupedMarkets.cardmarket.length > 0 && (
                            <div className="mb-4">
                                <p className="text-md font-semibold text-gray-200">CardMarket</p>
                                <div className="flex justify-center gap-2">
                                    {groupedMarkets.cardmarket.map(market => (
                                        <Button key={market.id} href={market.url} text="Buy" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
