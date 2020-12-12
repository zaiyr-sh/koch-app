from rest_framework import serializers

from users.models import User, Driver, CargoType, VehicleType
from djoser.serializers import UserSerializer


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
    name = serializers.CharField(source='user__name')
    surname = serializers.CharField(source='user__surname')
    phone_number = serializers.CharField(source='user__phone_phone')
    user_type = serializers.CharField(source='user__type')

    class Meta:
        model = Driver
        fields = [
            'name',
            'surname',
            'phone_number',
            'user_type',
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
