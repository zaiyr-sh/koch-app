from django_filters import rest_framework as filters

from .models import Cargo, Transportation


class CargoFilter(filters.FilterSet):
    class Meta:
        model = Cargo
        fields = {
            "price": ['range', 'exact'],
            "weight": ['range', 'exact'],
            'from_city': ["exact"],
            'from_region': ["exact"],
            'to_city': ["exact"],
            'to_region': ["exact"],
        }


class TransportationFilter(filters.FilterSet):
    name = filters.CharFilter(field_name='user__driver__cargo_type__name', lookup_expr='icontains')
    vehicle_type = filters.CharFilter(lookup_expr='exact', field_name='user__driver__vehicle_type__name')

    class Meta:
        model = Transportation
        fields = {
            "price": ['range', 'exact'],
            'from_city': ['exact'],
            'from_region': ['exact'],
            'to_city': ['exact'],
            'to_region': ['exact'],
        }
