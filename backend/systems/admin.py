from django.contrib import admin
from .models import *


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'number_of_room']
    
@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ['college', 'room_number']
    list_display_links = ['college', 'room_number']
    list_filter = ['college', ]
    
    
@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ['room', 'first_name', 'last_name']
    list_display_links = ['room', ]
    list_filter = ['room', ]
    
    
@admin.register(Case)
class CaseAdmin(admin.ModelAdmin):
    list_display = ['room', 'property_number']
    list_display_links = ['room', ]
    list_filter = ['room', ]
    
    
@admin.register(Device)
class DeviceAdmin(admin.ModelAdmin):
    list_display = ['room', 'device_name', 'property_number']
    list_display_links = ['room', ]
    list_filter = ['room', 'device_name']
