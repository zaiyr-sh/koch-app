from rest_framework import serializers

from users.models import User


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            "name",
            "surname",
            "phone_number",
        ]
