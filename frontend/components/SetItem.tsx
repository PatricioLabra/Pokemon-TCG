import Link from "next/link";
import { Set } from "@/types";
import Image from "next/image";

interface Props {
  set: Set;
}

export const SetItem = ({ set }: Props) => {
  const { id, name, series, printed_total, total, ptcgo_code, release_date, symbol_url, logo_url } = set;

  return (
    <div className="mx-auto mt-6 w-80 h-auto relative opacity-90">
      <Link href={`/sets/${id}/cards`}>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 rounded-lg overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-100 opacity-90">
          <div className="flex flex-col items-center justify-center text-center p-20 bg-gray-900/80 border-b-4 border-yellow-500">
            {/* Logo del set */}
            <div className="mb-4">
              <Image
                src={`${logo_url}`}
                alt={`${name} logo`}
                width={120}
                height={140}
                className="rounded-lg shadow-lg"
                priority={false}
              />
            </div>

            {/* Información del set */}
            <p className="text-xl font-bold text-white capitalize">{name}</p>
            <p className="text-md font-semibold text-gray-300">{series}</p>

            <div className="mt-4 text-sm font-medium text-gray-400">
              <p>{`Printed: ${printed_total}`}</p>
              <p>{`Total: ${total}`}</p>
              <p>{`Code: ${ptcgo_code}`}</p>
              <p>{`Released: ${release_date}`}</p>
            </div>
          </div>

          {/* Icono del símbolo */}
          <div className="absolute top-3 left-3 bg-white/80 rounded-full p-1 shadow-md">
            <Image
              src={`${symbol_url}`}
              alt={`${name} symbol`}
              width={40}
              height={40}
              className="rounded-full"
              priority={false}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
