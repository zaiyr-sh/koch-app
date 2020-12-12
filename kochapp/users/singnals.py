from django.db.models import signals
from django.dispatch import receiver

from users.models import User


@receiver(signals.post_save, sender=User)
def deactivate_driver(sender, instance, created, **kwargs):
    if instance.user_type == "driver" and created:
        instance.registered = False
        instance.checked = False
        instance.save()
