from rest_framework import serializers
from .models import *

# Сериализатор для модели Client
class ClientSerializer(serializers.ModelSerializer):
    # Форматирование даты и времени при сериализации
    add_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    
    class Meta:
        model = Client
        fields = '__all__'
    
    # Метод для создания нового объекта
    def create(self, validated_data):
        client = Client.objects.create(**validated_data)
        return client
