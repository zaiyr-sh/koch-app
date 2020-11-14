from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response

from . import models
from . import serializers
from .models import User


class DriverCreateView(generics.GenericAPIView):
    """
    Getting one specific driver
    """
    serializer_class = serializers.DriverSerializer
    queryset = models.Driver.objects.all()

    def post(self, request, *args, **kwargs):
        user = get_object_or_404(User, pk=request.data.pop('user'))
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exeception=True)
        serializer.save(user=user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
