import { getCards } from "@/api";
import { Card } from "@/types";
import { CardsGrid } from "@/components/CardsGrid";

interface Props {
    params: { id: string };
}
export default async function CardsPage({ params }: Props) {
    const { id } = await params
    const cards: Card[] = await getCards(id);

    return (
        <div>
          <CardsGrid cards = {cards} />
        </div>
    );
  }