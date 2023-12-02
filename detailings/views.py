from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist
from datetime import datetime
import json 
from django.forms.models import model_to_dict
from .models import User, Order, Car, Message

@login_required
def index(request):
    cars = Car.objects.filter(owner=request.user)
    read = False
    if len(Message.objects.filter(toUser=request.user, read=False)) >= 1:
        read = True
    return render(request, "detailings/index.html", {
            "username": request.user,
            "orders": Order.objects.all(),
            "cars": cars,
            "read": read
        })
    

@login_required
def indexCar(request):
    if request.method == "POST":
        cars = Car.objects.filter(owner=request.user)
        type = request.POST.get("car")
        if 'Select' == type:
            return render(request, "detailings/indexCar.html", {
                    "carMake": request.POST.get("carMake"),
                    "carModel": request.POST.get("carModel"),
                    "carPlate": request.POST.get("carPlate"),
                    "owner": request.user.username,
                    "cars": cars,
                    "username": request.user
        })
        elif 'Insert' == type:
            car = Car(
            make=request.POST.get("make"),
            model=request.POST.get("model"),
            plate=request.POST.get("plate"), 
            type="", 
            owner=request.user
            )
            car.save()
            return render(request, "detailings/indexCar.html", {
                    "carMake": car.make,
                    "carModel": car.model,
                    "carPlate": car.plate,
                    "owner": request.user,
                    "cars": cars,
                    "username": request.user
        })
    else:
        return HttpResponse("HELLO2")

    
def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "detailings/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "detailings/login.html")

@login_required
def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

@login_required
def message(request):
    messagesFrom = Message.objects.filter(fromUser=request.user)
    messagesTo = Message.objects.filter(toUser=request.user)
    read = False
    if len(Message.objects.filter(toUser=request.user, read=False)) >= 1:
        read = True
    if request.method == "POST":
        newMessage = Message(
        fromUser=request.user,
        toUser=User.objects.get(username="yuriadmin"),
        carPlate=request.POST.get("carPlate"), 
        subject=request.POST.get("subject"), 
        contents=request.POST.get("contents"),
        timestamp=datetime.now().replace(microsecond=0)
        )
        newMessage.save()
        return render(request, "detailings/messagePage.html", {
                "username": request.user,
                "messagesFrom": messagesFrom,
                "messagesTo": messagesTo,
                "read": read
            })
    else:
        return render(request, "detailings/messagePage.html", {
                "username": request.user,
                "messagesFrom": messagesFrom,
                "messagesTo": messagesTo,
                "read": read
            })
    

@login_required
def messageById(request, messageId):
    if request.method != "POST":
        messageById = Message.objects.get(id=messageId)
        map = {}
        
        for field in messageById._meta.fields:
            fieldName=str(field).replace('detailings.Message.','')
            map.update({fieldName: getattr(messageById, fieldName)})
        for item in map:
            if isinstance(map.get(item), User):
                map[item] = map.get(item).username
            if isinstance(map.get(item), datetime):
                map[item] = str(map.get(item))
        return HttpResponse(json.dumps(map))
    else:
        return HttpResponse(500)
    
@login_required
def readMessageById(request, messageId):
    if request.method != "POST":
        messageById = Message.objects.get(id=messageId)        
        messageById.read = True
        messageById.save()
        return HttpResponse(200)
    else:
        return HttpResponse(500)

def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "detailings/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "detailings/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "detailings/register.html")
    
@login_required
def neworder(request):
    if request.method == "POST":
       values = [[key.replace("Choice-",""), value] for key, value in request.POST.items()
                if key.startswith('Choice-')]
       car = Car.objects.get(plate=request.POST.get("carPlate"))
       order = Order(
       customer=User.objects.get(username=request.user),
       carPlate=car.plate,
       description="", 
       price=request.POST.get("totalVal"), 
       timestamp=datetime.now(),
       )
       order.save()
       return render(request, "detailings/createOrder.html", {
                   "order": order,
                   "username": request.user,
                   "car": car,
                   "contents": values
               })
    else:
       return HttpResponse(500)
    
@login_required
def closeOrder(request, order_id):
    if request.user.is_authenticated:
        if request.method == "POST":
            try:
                order=Order.objects.filter(pk=order_id).first()
                bids=""
                if order is not None and len(bids) >= 1:
                    order.winner = max(bids, key=lambda bidder: bidder.amount).user.username
                    order.save()
                return HttpResponseRedirect(reverse('orderpage', kwargs={'order_id':order_id}))
            except ObjectDoesNotExist:
                         return HttpResponse("Order not found.")
    else:
        return HttpResponseRedirect(reverse("login"))