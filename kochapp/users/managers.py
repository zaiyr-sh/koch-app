from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    user_in_migrations = True

    def create_user(self, phone_number, password, **kwargs):
        kwargs.setdefault('is_staff', False)
        kwargs.setdefault('is_superuser', False)

        if not phone_number:
            raise ValueError('The given email must be set')
        user = self.model(
            phone_number=phone_number, **kwargs)
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_superuser(self, *args, **kwargs):
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)

        if kwargs.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        return self.create_user(*args, **kwargs)
