from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from transportations.models import Cargo, Transportation
from transportations.serializers import CargoListSerializer, TransportationSerializer
from . import models
from . import serializers
from .models import User, CargoType, VehicleType


class DriverCreateView(generics.GenericAPIView):
    """
    Getting one specific driver
    """
    serializer_class = serializers.DriverSerializer
    queryset = models.Driver.objects.all()

    def post(self, request, *args, **kwargs):
        user = request.user
        if not user.is_authenticated:
            return Response({'error': 'No such authenticated user'}, status=status.HTTP_403_FORBIDDEN)
        try:
            driver = user.driver
            return Response({'error': 'Such driver already exists.'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            pass
    
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=user)
        user.registered = True
        user.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class PublishedAds(generics.ListAPIView):
    """
    Getting ads published by a driver or a client
    """
    permission_classes = (IsAuthenticated,)

    def get_serializer_class(self):
        if self.request.user.user_type == 'client':
            return CargoListSerializer
        if self.request.user.user_type == 'driver':
            return TransportationSerializer

    def get_queryset(self):
        if self.request.user.user_type == 'client':
            return Cargo.objects.filter(user=self.request.user)
        if self.request.user.user_type == 'driver':
            return Transportation.objects.filter(user=self.request.user)


class CargoTypes(generics.ListAPIView):
    """
    Listing all available cargo types
    """
    serializer_class = serializers.CargoTypeSerializer
    queryset = CargoType.objects.all()


class VehicleTypes(generics.ListAPIView):
    """
    Listing all available vehicles
    """
    serializer_class = serializers.VehicleTypeSerializer
    queryset = VehicleType.objects.all()
