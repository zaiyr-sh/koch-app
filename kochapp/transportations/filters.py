from django_filters import rest_framework as filters

from .models import Cargo


class CargoFilter(filters.FilterSet):
    class Meta:
        model = Cargo
        fields = {
            "price": ['range', 'exact'],
            "date_published": ['range'],
            'from_city': ['exact'],
            'from_region': ['exact'],
            'to_city': ['exact'],
            'to_region': ['exact'],
        }
