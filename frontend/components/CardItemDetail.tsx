import { CardDetail } from "@/types"
import Image from "next/image";

interface Props {
    card: CardDetail;
}

export const CardItemDetail = ({card}: Props) =>{
    const {name, supertype, number, rarity, images, markets, subtypes, types  } = card;
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center"> 
            <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{supertype}</p>
                <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{number}</p>
                <Image src={`${images?.[0]?.url}`} alt={`${name}`} width={200} height={100} priority={false}/>
                <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{name}</p>
                <p className="pt-2 text-lg font-semibold text-gray-50 capitalize" >{rarity}</p>
                { subtypes?.map( subtype => (
                    <div key={subtype} >
                        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{subtype}</p>
                    </div>
                ))}
                { types?.map( type => (
                    <div key={type} >
                        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{type}</p>
                    </div>
                ))}
                { markets.map( market => (
                    <div key={market.id} >
                        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{market.market}</p>
                        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{market.url}</p>
                    </div>
                ))}
            </div>
      </div>
    )
}