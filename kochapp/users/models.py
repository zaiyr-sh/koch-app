from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models

from .managers import UserManager


class CargoType(models.Model):
    name = models.CharField(max_length=100)


class VehicleType(models.Model):
    name = models.CharField(max_length=100)


class User(AbstractBaseUser, PermissionsMixin):
    """Base user model"""
    driver = 'driver'
    client = 'client'
    CHOICES = (
        (driver, 'driver'),
        (client, 'client')
    )
    name = models.CharField(max_length=255, blank=True, null=True, verbose_name='First name')
    surname = models.CharField(max_length=255, blank=True, null=True, verbose_name='Last name')
    phone_number = models.CharField(max_length=200, blank=True, null=True, verbose_name='Phone number', unique=True)
    user_type = models.CharField(max_length=30, choices=CHOICES)
    registered = models.BooleanField(default=True)
    checked = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False, verbose_name='Is staff')
    is_active = models.BooleanField(default=True, verbose_name='Is active')

    firebase_uid = models.CharField(max_length=255, default='')

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['name', "surname", 'user_type']

    objects = UserManager()

    def __str__(self):
        return self.get_full_name()

    def get_short_name(self):
        return self.name

    def get_full_name(self):
        return f'{self.name} {self.surname}'

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


def user_directory_path(instance, filename):
    return 'driver_{0}/{1}'.format(instance.user.id, filename)


class Driver(models.Model):
    """
    Storing drivers information
    """
    vehicle_type = models.ForeignKey(VehicleType, on_delete=models.PROTECT, related_name='drivers')
    cargo_type = models.ForeignKey(CargoType, on_delete=models.PROTECT, related_name='drivers')
    carrying_capacity = models.IntegerField()

    vehicle_passport = models.ImageField(upload_to=user_directory_path)
    driver_license = models.ImageField(upload_to=user_directory_path)
    id_passport = models.ImageField(upload_to=user_directory_path)

    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return f"{self.user.name}"
