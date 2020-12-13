from rest_framework.permissions import BasePermission


class IsRegisteredDriver(BasePermission):
    def has_permission(self, request, view):
        if request.method == "POST":
            is_authenticated = request.user.is_authenticated
            return bool(
                is_authenticated and request.user.user_type == "driver"
                and request.user.registered and request.user.checked
            )
        else:
            return True


class IsClient(BasePermission):
    def has_permission(self, request, view):
        if request.method == "POST":
            is_authenticated = request.user.is_authenticated
            return bool(is_authenticated and request.user.user_type == "client")
        else:
            return True
