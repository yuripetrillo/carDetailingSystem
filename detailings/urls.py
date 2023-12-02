from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("indexCar", views.indexCar, name="indexCar"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("neworder", views.neworder, name="neworder"),
    path("<int:order_id>/closeOrder", views.closeOrder, name="closeOrder"),
    path("message", views.message, name="message"),
    path("<int:messageId>/messageById", views.messageById, name="messageById"),
    path("<int:messageId>/readMessageById", views.readMessageById, name="readMessageById")

]
