from django.conf import settings
from django.db import models


class Region(models.Model):
    name = models.CharField(max_length=150)


class City(models.Model):
    name = models.CharField(max_length=150)


class Cargo(models.Model):
    """
    Storing cargos published by user
    """
    from_region = models.ForeignKey(Region, on_delete=models.PROTECT, related_name='cargos_from_region')
    from_city = models.ForeignKey(City, on_delete=models.PROTECT, related_name='cargos_from_region')
    from_shipment_date = models.DateField()

    to_shipment_date = models.DateField()
    to_region = models.ForeignKey(Region, on_delete=models.PROTECT, related_name='cargos_to_region')
    to_city = models.ForeignKey(City, on_delete=models.PROTECT, related_name='cargos_to_city')

    date_published = models.DateTimeField(auto_now_add=True)
    place_comment = models.TextField(null=True, blank=True)
    cargo_comment = models.TextField(null=True, blank=True)
    name = models.CharField(max_length=150)

    weight = models.FloatField()
    volume = models.FloatField()
    length = models.FloatField()
    width = models.FloatField()
    height = models.FloatField()
    price = models.IntegerField()

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='cargos')

    sender_name = models.CharField(max_length=100)
    sender_surname = models.CharField(max_length=100)

    phone_number = models.CharField(max_length=200, null=True)
    whatsapp_number = models.CharField(max_length=200, null=True, blank=True)
    telegram_number = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return f"{self.date_published} {self.name} {self.volume}"

    def save(self, *args, **kwargs):
        if not self.id:
            if not self.sender_name and not self.sender_name:
                self.sender_name = self.user.name
                self.sender_surname = self.user.surname
        super(Cargo, self).save(*args, **kwargs)

    class Meta:
        ordering = ['-date_published']


class Transportation(models.Model):
    """
    Storing vehicles published by users
    """
    departure_date = models.DateField()

    from_region = models.ForeignKey(Region, on_delete=models.PROTECT, related_name='vehicle_from_region')
    from_city = models.ForeignKey(City, on_delete=models.PROTECT, related_name='vehicle_from_region')

    to_region = models.ForeignKey(Region, on_delete=models.PROTECT, related_name='vehicle_to_region')
    to_city = models.ForeignKey(City, on_delete=models.PROTECT, related_name='vehicle_to_city')

    date_published = models.DateTimeField(auto_now_add=True)
    vehicle_comment = models.TextField(null=True, blank=True)
    carrying_capacity = models.FloatField()
    volume = models.IntegerField()
    price = models.IntegerField()

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='vehicles')

    def __str__(self):
        return f"{self.date_published} {self.user.driver.cargo_type} {self.driver.volume}"

    class Meta:
        ordering = ['-date_published']
