from django.shortcuts import redirect


class LoginMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if not request.user.is_authenticated and request.path != '/login/':
            return redirect('login_view')
        response = self.get_response(request)
        return response
