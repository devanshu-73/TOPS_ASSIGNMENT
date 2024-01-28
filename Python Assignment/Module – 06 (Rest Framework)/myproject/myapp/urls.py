from django.urls import path
from . import views 

urlpatterns = [
    path('books/',views.BookList , name='book-list'),
    path('books/<int:pk>/', views.BookDetail, name='book-detail'),
]
