# myapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/books/', views.book_list, name='book-list'),
]

