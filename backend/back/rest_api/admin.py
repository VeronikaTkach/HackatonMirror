from django.contrib import admin
from .models import Client

# Создаю класс для представления информации о клиентах в админке
class ClientAdmin(admin.ModelAdmin):
    # список или кортеж со всеми полями, отображаемыми в таблице с постами
    list_display = ('name', 'fam', 'email', 'phone', 'add_time')
    list_filter = ('fam', 'add_time')  # фильтры по полям

# Регистрирую модели в админке
admin.site.register(Client, ClientAdmin)
