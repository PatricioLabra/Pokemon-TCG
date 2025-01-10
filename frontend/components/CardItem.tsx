import Link from "next/link"
import { Card } from "@/types";
import Image from "next/image";

interface Props {
    card: Card;
}

export const CardItem = ({card}: Props) => {
    const {id, name, supertype, number, rarity, images } = card;

  return (
    
    <div className="mx-auto right-0 mt-2 w-60">
        <Link href={`/cards/${id}/`}>
            <div className=" bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{supertype}</p>
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{number}</p>
                    <Image src={`${images?.[0]?.url}`} alt={`${name}`} width={200} height={100} priority={false}/>
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{name}</p>
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{rarity}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}
