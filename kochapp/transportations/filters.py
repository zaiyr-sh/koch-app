from django_filters import rest_framework as filters

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
    # vehicle_type = filters.CharFilter(method='get_vehicle_type')
    # cargo_type = filters.CharFilter(method='get_cargo_type')

    class Meta:
        model = Transportation
        fields = {
            "price": ['range', 'exact'],
            'from_city': ['in'],
            'from_region': ['in'],
            'to_city': ['in'],
            'to_region': ['in'],
            'weight': ['exact', 'range'],
            'volume': ['exact', 'range'],
            # 'vehicle_type': ['exact'],
            # 'cargo_type': ['exact']
        }
    #
    # def get_cargo_type(self, queryset, name, value):
    #     return queryset.filter(user__driver__cargo_type=value)
    #
    # def get_vehicle_type(self, queryset, name, value):
    #     return queryset.filter(user__driver__vehicle_type=value)
