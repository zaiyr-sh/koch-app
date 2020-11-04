from django.db import models
from django.conf import settings



class Cargo(models.Model):
    """
    Storing cargos published by user
    """
    from_region = models.CharField(max_length=150)
    from_city= models.CharField(max_length=150)
    to_region = models.CharField(max_length=150)
    to_city= models.CharField(max_length=150)
    date_published = models.DateTimeField(auto_now_add=True)
    place_comment = models.TextField()
    cargo_comment = models.TextField()
    cargo_type = models.CharField(max_length=50)
    weight = models.FloatField()
    volume = models.FloatField()
    length = models.FloatField()
    width = models.FloatField()
    height = models.FloatField()
    phone_number = models.CharField(max_length=200)
    whatsapp_number = models.CharField(max_length=200)
    telegram_number = models.CharField(max_length=200)
    price = models.IntegerField()

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='cargos')
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.date_published} {self.cargo_type} {self.volume}"

    class Meta:
        ordering = ['-date_published']


class Vehicle(models.Model):
    """
    Storing vehicle data
    """
    pass
