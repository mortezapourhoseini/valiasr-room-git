from django.urls import path, include
from system.views import *
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'rooms', FormView)



urlpatterns = [
    path('login/', login),
    path('api/', include(router.urls)),
]
