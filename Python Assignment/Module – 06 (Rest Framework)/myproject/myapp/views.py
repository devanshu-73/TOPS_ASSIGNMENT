# myapp/views.py
from django.shortcuts import render, redirect
from .models import *

# Api 
from .serializers import BookSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

def index(request):
    books = Book.objects.all()
    return render(request, 'index.html', {'books': books})

def delete_view(request,id):
    book_id = id
    if book_id:
        book = Book.objects.get(pk=book_id)
        book.delete()
    books = Book.objects.all()
    return render(request, 'index.html', {'books': books})

@api_view(['GET', 'POST'])
def book_list_create(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return redirect('index')
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
