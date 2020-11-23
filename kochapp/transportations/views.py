from rest_framework import generics

from users.permissions import IsRegisteredDriver, IsClient
from drf_yasg.utils import swagger_auto_schema
from .filters import CargoFilter, TransportationFilter
from .models import Cargo, Transportation, Region, City
from .serializers import CargoDetailSerializer, CargoListSerializer, TransportationSerializer, RegionSerializer, \
    CitiesSerializer


class CargoListView(generics.ListCreateAPIView):
    filterset_class = CargoFilter
    serializer_class = CargoListSerializer
    queryset = Cargo.objects.all()
    permission_classes = (IsClient,)

    def get_serializer_class(self):
        if self.request.method == "POST":
            return CargoDetailSerializer
        else:
            return self.serializer_class

    @swagger_auto_schema(responses={'200': CargoDetailSerializer()}, tags=['cargo'])
    def post(self, request, *args, **kwargs):
        super(CargoListView, self).post(request, *args, **kwargs)

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
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)
        else:
            return Response({"error": "Authentication required to post cargo ad"}, status=status.HTTP_401_UNAUTHORIZED)


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
