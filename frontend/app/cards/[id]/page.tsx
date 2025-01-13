import { getCardDetail } from "@/api";
import { Card } from "@/types"
import { CardItemDetail } from "@/components/CardItemDetail";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>
}
 
/* Generación de la metadata por carta */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  
  try {
    const card: Card = await getCardDetail(id);

    return {
      title: `#${ card.id } - ${ card.name }`,
      description: ` Página de la carta ${ card.name }`,
      keywords: `${card.name}, carta pokemon, ${card.types}, ${card.rarity}`,
      robots: {
        index: true,
        follow: true,
      },
    }

  } catch (error) {

    console.error('Error obteniendo información del pokemon', error);

    return {
      title: `Página de la carta`,
      description: `Descripción de la carta`,
      keywords: "carta pokemon, detalles carta",
      robots: {
        index: true,
        follow: true,
      },
    }
  }
}

export default async function CardPage({ params }: Props) {
  const id = (await params).id;
  const card: Card = await getCardDetail(id);
  
  return (
    <div>
      {/* Detalle de carta */}
      <CardItemDetail card = {card} />
    </div>
  );
}
