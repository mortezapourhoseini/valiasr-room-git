from django.db import models


class Student(models.Model):
    id = models.CharField(max_length=16, primary_key=True)
    names = models.CharField(max_length=64)
    number_of_room = models.IntegerField(default=0)

    @classmethod
    def room_increment(cls, student_id):
        student = cls.objects.get(id=student_id)
        student.number_of_room += 1
        student.save()

    def __str__(self):
        return self.id


class Room(models.Model):
    room_number = models.CharField(max_length=8)
    college = models.CharField(max_length=32)
    room_phone_number = models.CharField(max_length=32, blank=True, null=True)
    node = models.CharField(max_length=2, blank=True, null=True)
    antennaStatus = models.CharField(max_length=32, blank=True, null=True)
    student = models.ForeignKey(Student, on_delete=models.DO_NOTHING, null=True, blank=True)

    def __str__(self):
        return f"{self.college} - {self.room_number}"


class Person(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    person_id = models.CharField(max_length=32, blank=True, null=True)
    phone_number = models.CharField(max_length=32, blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Case(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
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
    soft = models.TextField()

    def __str__(self):
        return f"case: {self.property_number}"


class Device(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    device_name = models.CharField(max_length=32)
    model = models.CharField(max_length=32)
    property_number = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.device_name}: {self.property_number}"
