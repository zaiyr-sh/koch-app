from rest_framework.permissions import IsAuthenticated


class IsNotRegisteredDriver(IsAuthenticated):
    def has_permission(self, request, view):
        is_authenticated = super().has_permission(request, view)
        return bool(is_authenticated and request.user.user_type == "driver" and not request.user.registered)


class IsRegisteredDriver(IsAuthenticated):
    def has_permission(self, request, view):
        if request.method == "POST":
            is_authenticated = super().has_permission(request, view)
            return bool(is_authenticated and request.user.user_type == "driver" and request.user.registered)


class IsClient(IsAuthenticated):
    def has_permission(self, request, view):
        if request.method == "POST":
            is_authenticated = super().has_permission(request, view)
            return bool(is_authenticated and request.user.user_type == "client")
