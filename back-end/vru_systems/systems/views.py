from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from .models import *
from .serializers import *
from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
    

class RoomAPI(ListCreateAPIView):
    authentication_classes = [JWTAuthentication, ]
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
    authentication_classes = [JWTAuthentication, ]
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
    authentication_classes = [JWTAuthentication, ]
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
    authentication_classes = [JWTAuthentication, ]
    permission_classes = (IsAuthenticated, )
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer    

    def post(self, request):
        serializer = DeviceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class UserLoginAPIView(APIView):
    permission_classes = (AllowAny, )
    
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = authenticate(
            username=serializer.validated_data['username'],
            password=serializer.validated_data['password']
        )
        
        if not user:
            return Response({'error': 'Invalid username or password'}, status=400)

        refresh = RefreshToken.for_user(user)
        response_data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        return Response(response_data, status=200)
    