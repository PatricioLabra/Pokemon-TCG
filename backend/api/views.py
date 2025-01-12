import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Set, Card
from .serializers import SetSerializer, CardSerializer

# Crear el logger
logger = logging.getLogger(__name__)

class SetListView(APIView):
    """
    GET /sets
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
    GET /sets/:id/cards/
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
    GET /cards/:id
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

