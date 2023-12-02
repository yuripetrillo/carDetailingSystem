from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass

class Car(models.Model):
    plate = models.CharField(primary_key=True, max_length=10)
    make = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owner')
    pass

class Order(models.Model):
    id = models.AutoField(primary_key=True)
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='customer')
    carPlate = models.CharField(max_length=10, blank=True, null=True)
    description = models.CharField(max_length=64)
    price = models.IntegerField()
    categoryname = models.CharField(max_length=255, blank=True, null=True)
    timestamp = models.DateTimeField(blank=True, null=True)
    contents = models.CharField(max_length=255, blank=True, null=True)
    def __str__(self):
        return f"{self.customer} ({self.price})"
    pass

class Message(models.Model):
    id = models.AutoField(primary_key=True)
    fromUser = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='fromUser')
    toUser = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='toUser')
    carPlate = models.CharField(max_length=10, blank=True, null=True)
    subject = models.CharField(max_length=155, blank=True, null=True)
    contents = models.CharField(max_length=255, blank=True, null=True)
    read = models.BooleanField(default=False)
    timestamp = models.DateTimeField(blank=True, null=True)
    pass
