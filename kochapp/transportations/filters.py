from django_filters import rest_framework as filters

from .models import Cargo, Transportation


class CargoFilter(filters.FilterSet):
    class Meta:
        model = Cargo
        fields = {
            "price": ['range', 'exact'],
            "weight": ['range', 'exact'],
            "volume": ['range', 'exact'],
            "date_published": ['range'],
            'from_city': ["exact"],
            'from_region': ["exact"],
            'to_city': ["exact"],
            'to_region': ["exact"],
        }


class TransportationFilter(filters.FilterSet):
    class Meta:
        model = Transportation
        fields = {
            "price": ['range', 'exact'],
            "departure_date": ['range'],
            'from_city': ["exact"],
            'from_region': ["exact"],
            'to_city': ["exact"],
            'to_region': ["exact"],
            'carrying_capacity': ['exact', 'range'],
            'volume': ['exact', 'range'],
        }
