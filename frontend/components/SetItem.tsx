import Link from "next/link";
import { Set } from "@/types";
import Image from "next/image";

interface Props {
    set: Set;
}

export const SetItem = ({ set }: Props) => {
    const { id, name, series, printed_total, total, ptcgo_code, release_date, symbol_url, logo_url } = set;

    return (
        <div className="mx-auto right-0 mt-6 w-72 h-96">
            <Link href={`/sets/${id}/cards`}>
                <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 rounded-lg overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-900 border-b-4 border-yellow-500">
                        <div className="pt-2 mb-4">
                            <Image src={`${logo_url}`} alt={`${name} logo`} width={100} height={100} className="rounded-lg shadow-lg mx-auto" priority={false} />
                        </div>

                        <p className="text-xl font-bold text-white capitalize">{name}</p>
                        <p className="text-md font-semibold text-gray-200">{series}</p>

                        <div className="pt-4 text-sm font-medium text-gray-300">
                            <p>{`Printed: ${printed_total}`}</p>
                            <p>{`Total: ${total}`}</p>
                            <p>{`Code: ${ptcgo_code}`}</p>
                            <p>{`Released: ${release_date}`}</p>
                        </div>

                        <div className="absolute top-2 left-2">
                            <Image src={`${symbol_url}`} alt={`${name} symbol`} width={50} height={50} className="rounded-full shadow-md" priority={false} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
