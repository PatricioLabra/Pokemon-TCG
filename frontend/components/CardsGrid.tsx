import { Card } from "@/types";
import { CardItem } from "./CardItem";

interface Props {
    cards: Card[];
}

export const CardsGrid = ({cards}: Props) =>{
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center"> 
        { 
          cards.map( card => (
            <CardItem key={card.id} card={card}/>
          ))
        }
      </div>
    )
}