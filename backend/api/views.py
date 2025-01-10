from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Set, Card
from .serializers import SetSerializer, CardSerializer, SimpleCardSerializer

class SetListView(APIView):
    """
    GET /sets
    """
    def get(self, request):
        sets = Set.objects.all()
        serializer = SetSerializer(sets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class SetCardsView(APIView):
    """
    GET /sets/:id/cards/
    """
    def get(self, request, id):
        set_instance = get_object_or_404(Set, id=id)
        cards = Card.objects.filter(set=set_instance)
        serializer = SimpleCardSerializer(cards, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CardDetailView(APIView):
    """
    GET /cards/:id
    """
    def get(self, request, id):
        card = get_object_or_404(Card, id=id)
        serializer = CardSerializer(card)
        return Response(serializer.data, status=status.HTTP_200_OK)
    