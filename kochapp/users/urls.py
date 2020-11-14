from django.urls import path
from . import views


urlpatterns = [
    path('drivers/register/', views.DriverCreateView.as_view(), name='drivers'),
    path('proflie/published-ads/', views.PublishedAds.as_view(), name='published-ads'),
]