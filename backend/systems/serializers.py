from rest_framework import serializers
from .models import *


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class RoomSerializer(serializers.Serializer):
    college = serializers.CharField()
    room_number = serializers.CharField()
    user = serializers.CharField()
    room_phone_number = serializers.CharField()
    node = serializers.CharField()
    antennaStatus = serializers.CharField()

    
class PersonSerializer(serializers.Serializer):
    college = serializers.CharField()
    room_number = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    person_id = serializers.CharField()
    phone_number = serializers.CharField()


class CaseSerializer(serializers.Serializer):
    college = serializers.CharField()
    room_number = serializers.CharField()
    model = serializers.CharField()
    ID_IT = serializers.CharField()
    property_number = serializers.CharField()
    os = serializers.CharField()
    cpu = serializers.CharField()
    mb = serializers.CharField()
    ram = serializers.CharField()
    power = serializers.CharField()
    ssd = serializers.CharField()
    ssdM2 = serializers.CharField()
    hdd = serializers.CharField()
    dvd = serializers.CharField()
    vga = serializers.CharField()
    soft = serializers.CharField()


class DeviceSerializer(serializers.Serializer):
    college = serializers.CharField()
    room_number = serializers.CharField()
    device_name = serializers.CharField()
    model = serializers.CharField()
    property_number = serializers.CharField()
    
