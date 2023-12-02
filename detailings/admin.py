from django.contrib import admin

# Register your models here.
from .models import User, Order, Car, Message

admin.site.register(User)
admin.site.register(Car)
admin.site.register(Order)
admin.site.register(Message)