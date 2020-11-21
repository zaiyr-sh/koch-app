from rest_framework import serializers

from users.models import User, Driver, CargoType, VehicleType


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "name",
            "surname",
            "phone_number",
        ]


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = [
            'vehicle_type',
            'cargo_type',
            'vehicle_passport',
            'driver_license',
            'id_passport',
        ]


class CargoTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CargoType
        fields = [
            'id',
            'name'
        ]


class VehicleTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleType
        fields = [
            'id',
            'name'
        ]
