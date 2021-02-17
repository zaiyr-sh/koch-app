from djoser.serializers import UserSerializer
from rest_framework import serializers

from users.models import User, Driver, CargoType, VehicleType


class CurrentUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = UserSerializer.Meta.fields + ('registered', 'checked')
        read_only_fields = ('registered',)


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "name",
            "surname",
            "phone_number",
            "user_type",
        ]


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = [
            'carrying_capacity',
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


class FireBaseSerializer(serializers.Serializer):
    uid_token = serializers.CharField()
    name = serializers.CharField()
    surname = serializers.CharField()
    phone_number = serializers.CharField()
    user_type = serializers.CharField()

    class Meta:
        fields = [
            'uid_token',
        ]
