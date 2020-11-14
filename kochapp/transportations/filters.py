from django_filters import rest_framework as filters

from .models import Cargo, Transportation


class CargoFilter(filters.FilterSet):
    class Meta:
        model = Cargo
        fields = {
            "price": ['range', 'exact'],
            "date_published": ['range'],
            'from_city': ['in'],
            'from_region': ['in'],
            'to_city': ['in'],
            'to_region': ['in'],
        }

class TransportationFilter(filters.FilterSet):
    class Meta:
        model = Transportation
        fields = {
            "price": ['range', 'exact'],
            "departure_date": ['range'],
            'from_city': ['in'],
            'from_region': ['in'],
            'to_city': ['in'],
            'to_region': ['in'],
            'carrying_capacity': ['exact', 'range'],
            'volume': ['exact', 'range'],
        }