from django.urls import path
from . import views


urlpatterns = [
    path('drivers/register/', views.DriverCreateView.as_view(), name='drivers'),
]