from pprint import pprint

from firebase_admin import auth
from rest_framework import generics, status, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from transportations.models import Cargo, Transportation
from transportations.serializers import CargoListSerializer, TransportationSerializer
from . import models
from . import serializers
from .models import CargoType, VehicleType, User


class DriverCreateView(generics.GenericAPIView):
    """
    Creating driver
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


class SingUpView(generics.CreateAPIView):
    """
    Creating user with firebase token
    """
    serializer_class = serializers.FireBaseSerializer
    queryset = User.objects.all()
    permissions_class = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            return Response({"message": "No auth token provided"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            decoded_token = auth.verify_id_token(serializer.data['uid_token'])
            firebase_uid = decoded_token['uid']
        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        try:
            User.objects.get(firebase_uid=firebase_uid)
            return Response({"message": "User already exists"}, status=status.HTTP_400_BAD_REQUEST)

        except User.DoesNotExist:
            user_data = serializer.data
            user_data.pop('uid_token')
            user_data['firebase_uid'] = firebase_uid
            password = request.data['password']
            User.objects.create_user(password=password, **user_data)

            return Response({'message': "User successfully created!"}, status=status.HTTP_201_CREATED)

    @staticmethod
    def get_tokens_for_user(user):
        refresh = RefreshToken.for_user(user)

        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }


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
