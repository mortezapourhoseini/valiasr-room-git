from django.contrib import admin
from .models import *


@admin.register(Room)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ['college', 'roomNumber']
    list_display_links = ['college', 'roomNumber']
    list_filter = ['college', ]
    
    
@admin.register(Master)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ['college', 'roomNumber', 'name', 'family']
    list_display_links = ['college', 'roomNumber']
    list_filter = ['college', ]
    
    
@admin.register(Case)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ['college', 'roomNumber', 'propertyNum']
    list_display_links = ['college', 'roomNumber']
    list_filter = ['college', ]
    
    
@admin.register(Device)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ['college', 'roomNumber', 'deviceName', 'deviceID']
    list_display_links = ['college', 'roomNumber']
    list_filter = ['college', 'deviceName']
