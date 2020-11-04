from django.urls import path
from . import views


urlpatterns = [
    path('', views.CargoListView.as_view(), name="cargos"),
    path('<int:pk>/', views.CargoDetailView.as_view(), name="cargos"),
]
