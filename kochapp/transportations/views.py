from rest_framework import generics, status
from rest_framework.response import Response

from .filters import CargoFilter, TransportationFilter
from .models import Cargo, Transportation
from .serializers import CargoDetailSerializer, CargoListSerializer, TransportationSerializer


class CargoListView(generics.ListCreateAPIView):
    filterset_class = CargoFilter
    serializer_class = CargoListSerializer
    queryset = Cargo.objects.all()

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)
        else:
            return Response({"error": "Authentication required to post cargo ad"}, status=status.HTTP_401_UNAUTHORIZED)

class CargoDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = CargoDetailSerializer
    queryset = Cargo.objects.all()


class TransportationListView(generics.ListCreateAPIView):
    filterset_class = TransportationFilter
    serializer_class = TransportationSerializer
    queryset = Transportation.objects.all()
