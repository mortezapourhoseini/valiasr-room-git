from rest_framework import serializers
from .models import *


class RoomSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Room
        fields = '__all__'


class MasterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Master
        fields = '__all__'


class CaseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Case
        fields = '__all__'


class DeviceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Device
        fields = '__all__'
        