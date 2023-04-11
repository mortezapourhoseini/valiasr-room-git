from django.db import models


class Room(models.Model):
    college = models.CharField(max_length=32)
    room_number = models.IntegerField()
    room_tell = models.IntegerField()
    node = models.IntegerField()
    antenna = models.SmallIntegerField()

    def __str__(self):
        return f"{self.college} {self.room_number}"
    

class Master(models.Model):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    code_meli = models.IntegerField()
    phone_number = models.IntegerField()
    room = models.ForeignKey(Room, on_delete=models.DO_NOTHING)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Case(models.Model):
    room = models.ForeignKey(Room, on_delete=models.DO_NOTHING)
    master = models.ForeignKey(Master, on_delete=models.DO_NOTHING)
    model = models.CharField(max_length=32)
    property_number = models.IntegerField()
    ID_IT = models.IntegerField()
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


class Device(models.Model):
    room = models.ForeignKey(Room, on_delete=models.DO_NOTHING)
    master = models.ForeignKey(Master, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=32)
    model = models.CharField(max_length=32)
    property_number = models.IntegerField()
