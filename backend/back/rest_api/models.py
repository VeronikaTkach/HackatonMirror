from django.db import models


# Контактная информация клиента
class Client(models.Model):   
    name = models.CharField(max_length=50, verbose_name='Имя')
    fam = models.CharField(max_length=50, verbose_name='Фамилия')
    email = models.EmailField()
    phone = models.TextField(max_length=50, verbose_name='Телефон')
    add_time = models.DateTimeField(auto_now_add=True) # время добавления записи (ставиться автоматически)
