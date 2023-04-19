from django.urls import path, include
from .views import *
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('api/room/', RoomAPI.as_view()),
    path('api/master/', MasterAPI.as_view()),
    path('api/case/', CaseAPI.as_view()),
    path('api/device/', DeviceAPI.as_view()),
    path('api-auth/', include('rest_framework.urls')),
    path('api/auth/', obtain_auth_token, name='api_token_auth'),
]
