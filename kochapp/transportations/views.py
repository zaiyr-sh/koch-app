from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics

from users.permissions import IsRegisteredDriver, IsClient
from .filters import CargoFilter, TransportationFilter
from .models import Cargo, Transportation, Region, City
from .serializers import CargoDetailSerializer, CargoListSerializer, TransportationSerializer, RegionSerializer, \
    CitySerializer


class CargoListView(generics.ListCreateAPIView):
    filterset_class = CargoFilter
    serializer_class = CargoDetailSerializer
    queryset = Cargo.objects.all()
    # permission_classes = (IsClient,)

    def get_serializer_class(self):
        if self.request.method == "POST":
            return CargoDetailSerializer
        else:
            return self.serializer_class

    @swagger_auto_schema(responses={'200': CargoDetailSerializer()}, tags=['cargo'])
    def post(self, request, *args, **kwargs):
        return super(CargoListView, self).post(request, *args, **kwargs)

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

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RegionsView(generics.ListAPIView):
    """
    Listing regions
    """
    queryset = Region.objects.all()
    serializer_class = RegionSerializer

