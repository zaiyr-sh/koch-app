from django.conf import settings
from django.db import models


class Region(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name

class City(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE, related_name='cities', null=True)
    name = models.CharField(max_length=150)

    def __str__(self):
        return f"{self.region.name} {self.name}"


class Cargo(models.Model):
    """
    Storing cargos published by user
    """
    from_region = models.ForeignKey(Region, on_delete=models.PROTECT, related_name='cargos_from_region')
    from_city = models.ForeignKey(City, on_delete=models.PROTECT, related_name='cargos_from_region')
    from_shipment_date = models.DateField()
    from_place_comment = models.TextField(null=True, blank=True)

    to_shipment_date = models.DateField()
    to_region = models.ForeignKey(Region, on_delete=models.PROTECT, related_name='cargos_to_region')
    to_city = models.ForeignKey(City, on_delete=models.PROTECT, related_name='cargos_to_city')
    to_place_comment = models.TextField(null=True, blank=True)

    date_published = models.DateTimeField(auto_now_add=True)
    cargo_comment = models.TextField(null=True, blank=True)
    name = models.CharField(max_length=150)

    weight = models.FloatField()
    price = models.IntegerField()

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='cargos')

    sender_name = models.CharField(max_length=100)
    sender_surname = models.CharField(max_length=100)

    phone_number = models.CharField(max_length=200, null=True)
    whatsapp_number = models.CharField(max_length=200, null=True, blank=True)
    telegram_number = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return f"{self.date_published} {self.name}"

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
    from_shipment_date = models.DateField(null=True)
    to_shipment_date = models.DateField(null=True)

    from_region = models.ForeignKey(Region, on_delete=models.PROTECT, related_name='vehicle_from_region')
    from_city = models.ForeignKey(City, on_delete=models.PROTECT, related_name='vehicle_from_region')

    to_region = models.ForeignKey(Region, on_delete=models.PROTECT, related_name='vehicle_to_region')
    to_city = models.ForeignKey(City, on_delete=models.PROTECT, related_name='vehicle_to_city')

    date_published = models.DateTimeField(auto_now_add=True)
    vehicle_comment = models.TextField(null=True, blank=True)
    weight = models.IntegerField()
    price = models.IntegerField()

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='vehicles')

    def __str__(self):
        return f"{self.date_published} {self.user.driver.cargo_type} {self.user.driver.carrying_capacity}"

    @property
    def name(self):
        return self.user.driver.vehicle_type.name

    class Meta:
        ordering = ['-date_published']
