from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from .models import *
from .serializers import *
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
    

class RoomAPI(ListCreateAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Room.objects.all()
    serializer_class = RoomSerializer    
    
    def post(self, request):
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
       
    
class MasterAPI(ListCreateAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Master.objects.all()
    serializer_class = MasterSerializer    

    def post(self, request):
        serializer = MasterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CaseAPI(ListCreateAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Case.objects.all()
    serializer_class = CaseSerializer    

    def post(self, request):
        serializer = CaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeviceAPI(ListCreateAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer    

    def post(self, request):
        serializer = DeviceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    