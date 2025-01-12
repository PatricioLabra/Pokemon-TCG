import { Set, Card } from "@/types";

// Función genérica para realizar solicitudes a la API
const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error al conectar con el backend:", error);
    return [] as unknown as T; // Retorna un array vacío si no se conecta al backend
  }
};

// Base URL de la API
const API_URL = process.env.API_URL;

// Verificar que `API_URL` esté definido
if (!API_URL) {
  throw new Error("La variable de entorno API_URL no está configurada.");
}

// Obtener sets
export const getSets = async (): Promise<Set[]> => {
  const SETS_URL = new URL("sets/", API_URL).toString();
  return await fetchData<Set[]>(SETS_URL);
};

// Obtener cartas de un set
export const getCards = async (id_set: string): Promise<Card[]> => {
  const CARDS_URL = new URL(`sets/${id_set}/cards/`, API_URL).toString();
  return await fetchData<Card[]>(CARDS_URL);
};

// Obtener detalles de una carta
export const getCardDetail = async (id_card: string): Promise<Card> => {
  const CARD_URL = new URL(`cards/${id_card}/`, API_URL).toString();
  return await fetchData<Card>(CARD_URL);
};
