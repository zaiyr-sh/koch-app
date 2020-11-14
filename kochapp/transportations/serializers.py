from rest_framework import serializers

from transportations.models import Cargo, Transportation
from users.serializers import CustomUserSerializer


class CargoListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cargo
        fields = [
            "id",
            "name",
            'from_region',
            'from_city',
            'to_region',
            'to_city',
            "date_published",
            "weight",
            "volume",
            "length",
            "width",
            "height",
            "price",
        ]


class CargoDetailSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)

    class Meta:
        model = Cargo
        fields = [
            "id",
            'from_region',
            'from_city',
            'to_region',
            'to_city',
            "date_published",
            "place_comment",
            "cargo_comment",
            "name",
            "weight",
            "volume",
            "length",
            "width",
            "height",
            "phone_number",
            "whatsapp_number",
            "telegram_number",
            "price",
            "sender_name",
            "sender_surname",
            "user",
        ]


class TransportationSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)

    class Meta:
        model = Transportation
        fields = [
            'id',
            'user',
            'departure_date',
            'from_region',
            'from_city',
            'to_region',
            'to_city',
            'date_published',
            'vehicle_comment',
            'price',
        ]
