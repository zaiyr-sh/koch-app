from rest_framework import serializers


class CustomPrimaryKeyField(serializers.PrimaryKeyRelatedField):
    def __init__(self, **kwargs):
        self.model = kwargs.pop('model', None)
        super(CustomPrimaryKeyField, self).__init__(**kwargs)

    def to_representation(self, value):
        return self.model.objects.get(pk=value.pk).name
