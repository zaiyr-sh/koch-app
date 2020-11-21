from django.contrib import admin

from . import models

# Register your models here.
admin.site.register(models.User)
admin.site.register(models.Driver)
admin.site.register(models.CargoType)
admin.site.register(models.VehicleType)
