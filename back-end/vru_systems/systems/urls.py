from django.urls import path, include
from .views import *


urlpatterns = [
    path('api/room/', RoomAPI.as_view()),
    path('api/master/', MasterAPI.as_view()),
    path('api/case/', CaseAPI.as_view()),
    path('api/device/', DeviceAPI.as_view()),
    path('api-auth/', include('rest_framework.urls')),
    path('login/', login_view, name='login_view'),
]
