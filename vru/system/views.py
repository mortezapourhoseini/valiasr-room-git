from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .serializers import *
from rest_framework import viewsets


@csrf_exempt
def login(request):
    if request.method == 'GET':
        return render(request, '')

    elif request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('form/')
        return redirect('login/')
    

class FormView(viewsets.ModelViewSet):
    serializer_class = RoomSerializer
    queryset = Room.objects.all()
    serializer_class = MasterSerializer
    queryset = Master.objects.all()
    serializer_class = CaseSerializer
    queryset = Case.objects.all()
    serializer_class = DeviceSerializer
    queryset = Device.objects.all()
