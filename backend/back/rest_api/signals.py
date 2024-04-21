# from django.db.models.signals import post_init, post_save
# from django.dispatch import receiver
# from django.core.mail import send_mail, EmailMultiAlternatives
# from django.template.loader import render_to_string

# from .models import Client
# from back.settings import DEFAULT_FROM_EMAIL


# @receiver(post_save, sender=Client)
# def notify_about_new_client(sender, instance, created, **kwargs):
#     """ Сигнал фиксирующий создание нового клиента """
#     #send_mail(
#     #    subject='ExampleSubject',
#     #    message='ExampleMessage',
#     #    from_email=DEFAULT_FROM_EMAIL,
#     #    recipient_list=['examplemail@mail.ru'],
#     #)

#     if created:
#         # Создание содержимого письма на основе html шаблона
#         html_content = render_to_string(
#             template_name='email_sending/email_content.html',
#             context={
#                 'name': instance.name,
#                 'surname': instance.fam,
#             },
#         )

#         # Создание письма
#         message = EmailMultiAlternatives(
#             subject='First Class',
#             body='',
#             from_email=DEFAULT_FROM_EMAIL,
#             to=['example@mail.ru'],
#         )

#         # Указание контента
#         message.attach_alternative(html_content, 'text/html')

#         # Отправка письма
#         message.send()
