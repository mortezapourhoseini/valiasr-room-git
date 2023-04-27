from django.shortcuts import render
from django.contrib.auth import authenticate, login
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication


class UserLoginAPIView(APIView):
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = authenticate(
            username=serializer.validated_data['username'],
            password=serializer.validated_data['password'],
        )

        if not user:
            return Response({'error': 'Invalid username or password'}, status=400)

        refresh = RefreshToken.for_user(user)
        response_data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        return Response(response_data, status=200)


class RoomAPI(APIView):
    authentication_classes = (JWTAuthentication, )
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            try:
                room = Room.objects.get(room_number=serializer.validated_data['room_number'], college=serializer.validated_data['college'])
                return Response(serializer.data, status=status.HTTP_200_OK)
            except:
                Room.objects.create(
                    room_number=serializer.validated_data['room_number'],
                    college=serializer.validated_data['college'],
                    node=serializer.validated_data['node'],
                    room_phone_number=serializer.validated_data['room_phone_number'],
                    antennaStatus=serializer.validated_data['antennaStatus'],
                    student=Student.objects.get(
                        id=serializer.validated_data['user'])
                )
                Student.room_increment(serializer.validated_data['user'])
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PersonAPI(APIView):
    authentication_classes = (JWTAuthentication, )
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            try:
                person = Person.objects.get(first_name=serializer.validated_data['first_name'], last_name=serializer.validated_data['last_name'], )
            except:
                Person.objects.create(
                    room=Room.objects.get(
                        college=serializer.validated_data['college'],
                        room_number=serializer.validated_data['room_number']
                    ),
                    first_name=serializer.validated_data['first_name'],
                    last_name=serializer.validated_data['last_name'],
                    person_id=serializer.validated_data['person_id'],
                    phone_number=serializer.validated_data['phone_number']
                )
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CaseAPI(APIView):
    authentication_classes = (JWTAuthentication, )
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        serializer = CaseSerializer(data=request.data)
        if serializer.is_valid():
            try:
                case = Case.objects.get(property_number=serializer.validated_data['property_number'])
            except:
                Case.objects.create(
                    room=Room.objects.get(
                        college=serializer.validated_data['college'],
                        room_number=serializer.validated_data['room_number']
                    ),
                    model=serializer.validated_data['model'],
                    property_number=serializer.validated_data['property_number'],
                    ID_IT=serializer.validated_data['ID_IT'],
                    mb=serializer.validated_data['mb'],
                    cpu=serializer.validated_data['cpu'],
                    ram=serializer.validated_data['ram'],
                    power=serializer.validated_data['power'],
                    ssd=serializer.validated_data['ssd'],
                    ssdM2=serializer.validated_data['ssdM2'],
                    hdd=serializer.validated_data['hdd'],
                    dvd=serializer.validated_data['dvd'],
                    vga=serializer.validated_data['vga'],
                    os=serializer.validated_data['os'],
                    soft=serializer.validated_data['soft']
                )
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeviceAPI(APIView):
    authentication_classes = (JWTAuthentication, )
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        serializer = DeviceSerializer(data=request.data)
        if serializer.is_valid():
            try:
                device = Device.objects.get(property_number=serializer.validated_data['property_number'])
            except:
                Device.objects.create(
                    room=Room.objects.get(
                        college=serializer.validated_data['college'],
                        room_number=serializer.validated_data['room_number']
                    ),
                    device_name=serializer.validated_data['device_name'],
                    model=serializer.validated_data['model'],
                    property_number=serializer.validated_data['property_number']
                )
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
