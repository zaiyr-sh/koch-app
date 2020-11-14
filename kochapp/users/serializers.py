from rest_framework import serializers

from users.models import User, Driver


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
