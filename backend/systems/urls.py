from django.urls import path
from .views import *


urlpatterns = [
    path('api/auth/', UserLoginAPIView.as_view()),
    path('api/room/', RoomAPI.as_view()),
    path('api/person/', PersonAPI.as_view()),
    path('api/case/', CaseAPI.as_view()),
    path('api/device/', DeviceAPI.as_view()),
]
