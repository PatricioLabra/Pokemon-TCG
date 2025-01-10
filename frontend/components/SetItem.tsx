import Link from "next/link"
import { Set } from "@/types";
import Image from "next/image";

interface Props {
    set: Set;
}

export const SetItem = ({set}: Props) => {
    const {id, name, series, printed_total, total, ptcgo_code, release_date, symbol_url, logo_url} = set;

  return (
    
    <div className="mx-auto right-0 mt-2 w-60">
        <Link href={`/sets/${id}/cards`}>
            <div className=" bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{name}</p>
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{series}</p>
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{printed_total}</p>
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{total}</p>
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{ptcgo_code}</p>
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{release_date}</p>
                    <Image src={`${symbol_url}`} alt={`${name}`} width={50} height={50} priority={false}/>
                    <Image src={`${logo_url}`} alt={`${name}`} width={100} height={100} priority={false}/>
                </div>
            </div>
        </Link>
    </div>
  )
}
