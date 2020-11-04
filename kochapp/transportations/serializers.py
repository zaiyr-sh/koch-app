from rest_framework import serializers

from transportations.models import Cargo
from users.serializers import UserSerializer


class CargoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cargo
        fields = [
            "id",
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
    user = UserSerializer(read_only=True)

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
            "cargo_type",
            "weight",
            "volume",
            "length",
            "width",
            "height",
            "phone_number",
            "whatsapp_number",
            "telegram_number",
            "price",
            "name",
            "surname",
            "user",
        ]
