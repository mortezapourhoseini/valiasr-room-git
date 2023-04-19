from django.db import models


class Room(models.Model):
    user = models.CharField(max_length=32)
    roomNumber = models.CharField(max_length=8)
    college = models.CharField(max_length=32)
    roomTel = models.CharField(max_length=32, blank=True, null=True)
    node = models.CharField(max_length=2, blank=True, null=True)
    antennaStatus = models.CharField(max_length=32, blank=True, null=True)

    def __str__(self):
        return f"{self.college} {self.roomNumber}"


class Master(models.Model):
    user = models.CharField(max_length=32)
    college = models.CharField(max_length=32)
    roomNumber = models.CharField(max_length=8)
    name = models.CharField(max_length=32)
    family = models.CharField(max_length=32)
    personId = models.CharField(max_length=16)
    phone = models.CharField(max_length=32)

    def __str__(self):
        return f"{self.college} {self.room} {self.first_name} {self.last_name}"
    
    
class Case(models.Model):
    user = models.CharField(max_length=32)
    college = models.CharField(max_length=32)
    roomNumber = models.CharField(max_length=8)
    model = models.CharField(max_length=32)
    propertyNum = models.CharField(max_length=64)
    idIt = models.CharField(max_length=32)
    mb = models.CharField(max_length=32)
    cpu = models.CharField(max_length=32)
    ram = models.CharField(max_length=32)
    power = models.CharField(max_length=32, blank=True, null=True)
    ssd = models.CharField(max_length=32, blank=True, null=True)
    ssdM2 = models.CharField(max_length=32, blank=True, null=True)
    hdd = models.CharField(max_length=32, blank=True, null=True)
    dvd = models.CharField(max_length=32, blank=True, null=True)
    vga = models.CharField(max_length=32, blank=True, null=True)
    os = models.CharField(max_length=10)
    soft = models.TextField()
    
    def __str__(self):
        return f"{self.college} {self.roomNumber} case: {self.propertyNum}"
    
    
class Device(models.Model):
    user = models.CharField(max_length=32)
    college = models.CharField(max_length=32)
    roomNumber = models.CharField(max_length=8)
    deviceName = models.CharField(max_length=32)
    deviceModel = models.CharField(max_length=32)
    deviceID = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.college} {self.roomNumber} {self.deviceName}: {self.deviceID}"
