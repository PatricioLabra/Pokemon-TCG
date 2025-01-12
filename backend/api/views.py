import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Set, Card
from .serializers import SetSerializer, CardSerializer

# Creación del Logger
logger = logging.getLogger(__name__)

class SetListView(APIView):
    """
    Vista para obtener la lista de todos los sets de cartas.

    Esta vista maneja las solicitudes HTTP GET para recuperar todos los sets de cartas almacenados en la base de datos.
    Utiliza un serializer para convertir los objetos `Set` a un formato JSON.

    Métodos:
        GET: Obtiene una lista de todos los sets y devuelve una respuesta con los datos serializados.

    Respuestas:
        - 200 OK: Cuando la solicitud es exitosa y se devuelven los sets serializados.
        - 500 Internal Server Error: Si ocurre un error en el servidor al procesar la solicitud.
    """
    def get(self, request):
        try:
            sets = Set.objects.all()
            serializer = SetSerializer(sets, many=True)
            logger.info(f"Fetched {len(sets)} sets")
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(f"Error fetching sets: {e}", exc_info=True)
            return Response({"detail": "Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SetCardsView(APIView):
    """
    Vista para obtener las cartas asociadas a un set específico.

    Esta vista maneja las solicitudes HTTP GET para obtener todas las cartas asociadas a un set determinado.
    Se utiliza un ID de set para filtrar las cartas relacionadas y devolverlas en formato JSON.

    Métodos:
        GET: Obtiene las cartas de un set y devuelve una respuesta con los datos serializados.

    Respuestas:
        - 200 OK: Cuando las cartas son obtenidas correctamente y serializadas.
        - 404 Not Found: Si no se encuentra un set con el ID proporcionado.
        - 500 Internal Server Error: Si ocurre un error en el servidor al procesar la solicitud.
    """
    def get(self, request, id):
        try:
            set_instance = get_object_or_404(Set, id=id)
            cards = Card.objects.filter(set=set_instance)
            if not cards:
                logger.warning(f"No cards found for set ID: {id}")
            logger.info(f"Fetched {len(cards)} cards for set ID: {id}")
            serializer = CardSerializer(cards, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(f"Error fetching cards for set {id}: {e}", exc_info=True)
            return Response({"detail": "Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CardDetailView(APIView):
    """
    Vista para obtener los detalles de una carta específica.

    Esta vista maneja las solicitudes HTTP GET para obtener los detalles de una carta individual, 
    utilizando un ID para localizar la carta correspondiente y devolver sus datos en formato JSON.

    Métodos:
        GET: Obtiene los detalles de una carta con el ID proporcionado y devuelve una respuesta con los datos serializados.

    Respuestas:
        - 200 OK: Cuando la carta es obtenida y serializada.
        - 404 Not Found: Si no se encuentra una carta con el ID proporcionado.
        - 500 Internal Server Error: Si ocurre un error al procesar la solicitud.
    """
    def get(self, request, id):
        try:
            card = get_object_or_404(Card, id=id)
            logger.info(f"Fetched card with ID: {id}")
            serializer = CardSerializer(card)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(f"Error fetching card {id}: {e}", exc_info=True)
            return Response({"detail": "Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

