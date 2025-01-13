"use client"

import { Card, Markets } from "@/types";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

interface Props {
    card: Card;
}

export const CardItemDetail = ({ card }: Props) => {
    const { name, supertype, number, rarity, images, markets, subtypes, types } = card;
    const [isLoading, setIsLoading] = useState(true);
    const [isEnlarged, setIsEnlarged] = useState(false);

    const groupedMarkets = markets.reduce((acc, market) => {
        if (market.market === "tcgplayer") {
            acc.tcgplayer.push(market);
        } else if (market.market === "cardmarket") {
            acc.cardmarket.push(market);
        }
        return acc;
    }, { tcgplayer: [] as Markets[], cardmarket: [] as Markets[] });

    const toggleImageSize = () => {
        setIsEnlarged(!isEnlarged);
    };

    return (
        <div className="flex flex-wrap m-8 items-center justify-center bg-gray-900/95 rounded-lg w-auto h-auto max-w-full">
            <p className="absolute top-2 left-2 text-xl sm:text-2xl md:text-3xl text-yellow-400 p-3">{`${number}`}</p>
            <div className="flex items-center w-full max-w-6xl">
                <div className="relative flex justify-center items-center w-72 sm:w-96 h-auto overflow-hidden rounded-lg">
                    {isLoading && (
                        <div className="inset-0 flex justify-center items-center bg-opacity-50 pointer-events-none">
                            <div className="w-12 h-12 border-4 border-t-yellow-400 border-solid rounded-full animate-spin"></div>
                        </div>
                    )}

                    <Image
                        src={`${images?.[1]?.url}`}
                        alt={`${name}`}
                        width={300}
                        height={400}
                        priority={false}
                        onLoad={() => setIsLoading(false)}
                        onClick={toggleImageSize}
                        className={`transition-all duration-500 ease-in-out transform cursor-pointer
                            ${isEnlarged ? "fixed top-1/2 left-1/2 w-3/4 sm:w-1/4 h-3/4 transform -translate-x-1/2 -translate-y-1/2 z-20" : ""}`}
                    />
                </div>

                <div className="flex flex-col justify-between m-10 text-gray-200">
                    <p className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{name}</p>

                    <div className="justify-between items-center mt-2  font-semibold text-gray-50">
                        <p className="text-l sm:text-2xl font-semibold text-gray-400 capitalize">{supertype}</p>
                        <p className="text-l text-yellow-400">{rarity}</p>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm sm:text-md font-semibold text-gray-200">Subtypes:</p>
                        <div className="flex justify-center gap-2">
                            {subtypes?.map(subtype => (
                                <p key={subtype} className="text-xs sm:text-sm font-semibold text-pink-600 capitalize">{subtype}</p>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm sm:text-md font-semibold text-gray-200">Types:</p>
                        <div className="flex justify-center gap-2">
                            {types?.map(type => (
                                <p key={type} className="text-xs sm:text-sm font-semibold text-pink-600 capitalize">{type}</p>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        {groupedMarkets.tcgplayer.length > 0 && (
                            <div className="mb-4">
                                <p className="text-sm sm:text-md font-semibold text-gray-200">TCGPlayer</p>
                                <div className="flex justify-center gap-2">
                                    {groupedMarkets.tcgplayer.map(market => (
                                        <Button key={market.id} href={market.url} text="View TCG" />
                                    ))}
                                </div>
                            </div>
                        )}

                        {groupedMarkets.cardmarket.length > 0 && (
                            <div className="mb-4">
                                <p className="text-sm sm:text-md font-semibold text-gray-200 ">CardMarket</p>
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
