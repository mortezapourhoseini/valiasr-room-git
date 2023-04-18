from django.db import models


class Room(models.Model):
    room = models.CharField(max_length=8)
    college = models.CharField(max_length=32)
    room_tell = models.CharField(max_length=32, blank=True, null=True)
    node = models.CharField(max_length=2, blank=True, null=True)
    antenna = models.CharField(max_length=32, blank=True, null=True)

    def __str__(self):
        return f"{self.college} {self.room}"


class Master(models.Model):
    college = models.CharField(max_length=32)
    room = models.CharField(max_length=8)
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    code_meli = models.CharField(max_length=16)
    phone_number = models.CharField(max_length=32)

    def __str__(self):
        return f"{self.college} {self.room} {self.first_name} {self.last_name}"
    
    
class Case(models.Model):
    college = models.CharField(max_length=32)
    room = models.CharField(max_length=8)
    model = models.CharField(max_length=32)
    property_number = models.CharField(max_length=64)
    ID_IT = models.CharField(max_length=32)
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
    software = models.TextField()
    
    def __str__(self):
        return f"{self.college} {self.room} case: {self.property_number}"
    
    
class Device(models.Model):
    college = models.CharField(max_length=32)
    room = models.CharField(max_length=8)
    name = models.CharField(max_length=32)
    model = models.CharField(max_length=32)
    property_number = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.college} {self.room} {self.name}: {self.property_number}"
