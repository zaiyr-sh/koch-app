from django_filters import rest_framework as filters

from users.models import CargoType, VehicleType
from .models import Cargo, Transportation


class CargoFilter(filters.FilterSet):
    class Meta:
        model = Cargo
        fields = {
            "price": ['range', 'exact'],
            "weight": ['range', 'exact'],
            "volume": ['range', 'exact'],
            'from_city': ["exact"],
            'from_region': ["exact"],
            'to_city': ["exact"],
            'to_region': ["exact"],
        }


class TransportationFilter(filters.FilterSet):
    name = filters.CharFilter(field_name='user__driver__cargo_type__name')
    vehicle_type = filters.CharFilter(lookup_expr='exact', field_name='user__driver__vehicle_type')

    class Meta:
        model = Transportation
        fields = {
            "price": ['range', 'exact'],
            'from_city': ['exact'],
            'from_region': ['exact'],
            'to_city': ['exact'],
            'to_region': ['exact'],
            'weight': ['exact', 'range'],
            'volume': ['exact', 'range'],
        }
