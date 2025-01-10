from rest_framework import serializers
from .models import Set, Card, Image, Market

class SetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Set
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'url', 'type']

class MarketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Market
        fields = ['id', 'url', 'updated_at', 'market']

class CardSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    markets = MarketSerializer(many=True, read_only=True)

    class Meta:
        model = Card
        fields = [
            'id', 'name', 'supertype', 'subtypes', 'types', 
            'set_id', 'number', 'rarity', 'images', 'markets'
        ]

class SimpleCardSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Card
        fields = [
            'id', 'name', 'supertype', 'number', 'rarity', 'images'
        ]
