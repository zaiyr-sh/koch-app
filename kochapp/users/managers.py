from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):

    def create_user(self, password, **extra_fields):
        """
        Creates and saves a new User
        """

        if not password:
            raise ValueError("Password is required!")

        user = self.model(
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, password, **extra_fields):
        """
        Creates and saves new superuser
        """
        user = self.create_user(password, **extra_fields)
        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)

        return user
