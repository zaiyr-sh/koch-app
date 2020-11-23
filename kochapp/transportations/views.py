from rest_framework import generics

from users.permissions import IsRegisteredDriver, IsClient
from .filters import CargoFilter, TransportationFilter
from .models import Cargo, Transportation, Region, City
from .serializers import CargoDetailSerializer, CargoListSerializer, TransportationSerializer, RegionSerializer, \
    CitiesSerializer


class CargoListView(generics.ListCreateAPIView):
    filterset_class = CargoFilter
    serializer_class = CargoListSerializer
    queryset = Cargo.objects.all()
    permission_classes = (IsClient,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CargoDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = CargoDetailSerializer
    queryset = Cargo.objects.all()
    permission_classes = ()


class TransportationListView(generics.ListCreateAPIView):
    filterset_class = TransportationFilter
    serializer_class = TransportationSerializer
    queryset = Transportation.objects.all()
    permission_classes = (IsRegisteredDriver,)


class RegionsView(generics.ListAPIView):
    """
    Listing regions
    """
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


class CitiesView(generics.ListAPIView):
    """
    Listing cities
    """
    queryset = City.objects.all()
    serializer_class = CitiesSerializer
