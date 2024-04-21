from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework import viewsets, status, generics
from django.shortcuts import get_object_or_404


# Базовое представление для наследования
class BaseViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return self.model.objects.all()
    

# Представление для модели Client
class ClientView(BaseViewSet):
    serializer_class = ClientSerializer
    model = Client

    def create(self, request, *args, **kwargs):
        # Создание объекта клиента
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'status': status.HTTP_200_OK,
                'message': None,
                'id': serializer.data['id'],
            })
        # Обработка ошибок валидации и внутренней ошибки сервера
        if status.HTTP_400_BAD_REQUEST:
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'message': 'Bad Request',
                'id': None,
            })
        if status.HTTP_500_INTERNAL_SERVER_ERROR:
            return Response({
                'status': status.HTTP_500_INTERNAL_SERVER_ERROR,
                'message': 'Ошибка подключения к базе данных.',
                'id': None,
            })


# Представление для метода
class EmailAPIView(generics.ListAPIView):
    serializer_class = ClientSerializer

    def get_queryset(self):
        email = self.request.query_params.get('client__email', None)
        client_instance = get_object_or_404(Client, email=email)
        return ClientSerializer.objects.filter(client=client_instance)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    