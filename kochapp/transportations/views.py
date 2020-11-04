from rest_framework import generics, status
from rest_framework.response import Response

from transportations.filters import CargoFilter
from transportations.models import Cargo
from transportations.serializers import CargoDetailSerializer, CargoListSerializer


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
