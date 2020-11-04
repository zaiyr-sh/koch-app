from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    """Base user model"""
    name = models.CharField(max_length=255, blank=True, null=True, verbose_name='First name')
    surname = models.CharField(max_length=255, blank=True, null=True, verbose_name='Last name')
    phone_number = models.CharField(max_length=200, blank=True, null=True, verbose_name='Phone number', unique=True)
    is_staff = models.BooleanField(default=False, verbose_name='Is staff')
    is_active = models.BooleanField(default=True, verbose_name='Is active')

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['name', "surname",]

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
