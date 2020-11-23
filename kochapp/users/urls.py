from django.urls import path
from . import views


urlpatterns = [
    path('drivers/register/', views.DriverCreateView.as_view(), name='drivers'),
    path('proflie/published-ads/', views.PublishedAds.as_view(), name='published-ads'),
    path('cargo-types/', views.CargoTypes.as_view(), name='cargo-types'),
    path('vehicle-types/', views.VehicleTypes.as_view(), name='vehicle-types'),
]