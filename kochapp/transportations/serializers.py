from rest_framework import serializers

from users.serializers import CustomUserSerializer, DriverSerializer
from .fields import CustomPrimaryKeyField
from .models import Cargo, Transportation, Region, City


class CargoListSerializer(serializers.ModelSerializer):
    from_region = CustomPrimaryKeyField(queryset=Region.objects.all(), model=Region)
    to_region = CustomPrimaryKeyField(queryset=Region.objects.all(), model=Region)
    from_city = CustomPrimaryKeyField(queryset=City.objects.all(), model=City)
    to_city = CustomPrimaryKeyField(queryset=City.objects.all(), model=City)

    class Meta:
        model = Cargo
        fields = [
            "id",
            "name",
            'from_region',
            'from_city',
            'to_region',
            'to_city',
            'from_shipment_date',
            'to_shipment_date',
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
    from_region = CustomPrimaryKeyField(queryset=Region.objects.all(), model=Region)
    to_region = CustomPrimaryKeyField(queryset=Region.objects.all(), model=Region)
    from_city = CustomPrimaryKeyField(queryset=City.objects.all(), model=City)
    to_city = CustomPrimaryKeyField(queryset=City.objects.all(), model=City)
    sender_name = serializers.CharField(required=False)
    sender_surname = serializers.CharField(required=False)

    class Meta:
        model = Cargo
        fields = [
            "id",
            'from_region',
            'from_city',
            'to_region',
            'to_city',
            "date_published",
            "from_place_comment",
            "to_place_comment",
            "cargo_comment",
            'from_shipment_date',
            'to_shipment_date',
            "name",
            "weight",
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
    name = serializers.CharField(read_only=True)
    from_region = CustomPrimaryKeyField(queryset=Region.objects.all(), model=Region)
    to_region = CustomPrimaryKeyField(queryset=Region.objects.all(), model=Region)
    from_city = CustomPrimaryKeyField(queryset=City.objects.all(), model=City)
    to_city = CustomPrimaryKeyField(queryset=City.objects.all(), model=City)

    class Meta:
        model = Transportation
        fields = [
            'id',
            "name",
            'user',
            'from_shipment_date',
            'to_shipment_date',
            'from_region',
            'from_city',
            'to_region',
            'to_city',
            'date_published',
            'vehicle_comment',
            'price',
            'weight',
        ]


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = [
            'id',
            'name'
        ]

class RegionSerializer(serializers.ModelSerializer):
    cities = CitySerializer(many=True)

    class Meta:
        model = Region
        fields = [
            'id',
            'name',
            'cities',
        ]



