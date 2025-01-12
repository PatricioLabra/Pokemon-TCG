import { getCardDetail } from "@/api";
import { Card } from "@/types"
import { CardItemDetail } from "@/components/CardItemDetail";

interface Props {
    params: { id: string };
}
export default async function CardPage({ params }: Props) {
  const { id } = await params;
  const card: Card = await getCardDetail(id);
  
  return (
    <div>
      {/* Detalle de carta */}
      <CardItemDetail card = {card} />
    </div>
  );
}
