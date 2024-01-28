# myapp/urls.py
from django.urls import path
from .views import index, book_list_create,delete_view

urlpatterns = [
    path('', index, name='index'), 
    path('books/', book_list_create, name='book-list-create'),
    path('<int:id>', delete_view, name='delete-book'),
]
