from django.urls import path
from . import views


urlpatterns = [
    path('', views.CargoListView.as_view(), name="cargos"),
    path('<int:pk>/', views.CargoDetailView.as_view(), name="cargos-detail"),
    path('transportation/', views.TransportationListView.as_view(), name='transportations'),
    path('regions/', views.RegionsView.as_view(), name='regions'),
]
