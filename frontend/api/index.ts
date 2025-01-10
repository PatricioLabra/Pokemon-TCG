import { Set, Card, CardDetail } from "@/types";

export const getSets = async (): Promise<Set[]> => {
  const API_URL = process.env.API_URL;
  const SETS_URL = new URL("sets/", API_URL).toString(); // Genera la URL completa

  try {
    const response = await fetch(SETS_URL);

    if (!response.ok) {
      throw new Error(`Error al obtener los sets: ${response.status}`);
    }

    const data: Set[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error al conectar con el backend:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};

// Función para obtener las cartas de un set desde la API
export const getCards = async (id_set: string): Promise<Card[]> => {
  const API_URL = process.env.API_URL || "http://127.0.0.1:8000/";
  const CARDS_URL = new URL(`sets/${id_set}/cards/`, API_URL).toString(); // Genera la URL completa

  try {
    const response = await fetch(CARDS_URL);

    if (!response.ok) {
      throw new Error(`Error al obtener las cartas: ${response.status}`);
    }

    const data: Card[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error al conectar con el backend:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};

export const getCardDetail = async (id_card: string): Promise<CardDetail> => {
  const API_URL = process.env.API_URL || "http://127.0.0.1:8000/";
  const CARD_URL = new URL(`cards/${id_card}/`, API_URL).toString(); // Genera la URL completa

  try {
    const response = await fetch(CARD_URL);

    if (!response.ok) {
      throw new Error(`Error al obtener la carta: ${response.status}`);
    }

    const data: CardDetail = await response.json();
    return data;
  } catch (error) {
    console.error("Error al conectar con el backend:", error);
    throw error; // Propaga el error para que la llamada lo maneje adecuadamente
  }
};
