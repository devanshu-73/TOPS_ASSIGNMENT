
# myapp/views.py
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer

@api_view(['GET'])
def book_list(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)











# # myapp/views.py
# from django.shortcuts import render, redirect
# from django.http import HttpResponseRedirect
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .models import Book
# from .serializers import BookSerializer

# @api_view(['GET', 'POST', 'DELETE'])
# def book_list(request):
#     if request.method == 'GET':
#         books = Book.objects.all()
#         serializer = BookSerializer(books, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = BookSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return HttpResponseRedirect('/')
#         return Response(serializer.errors, status=400)

#     elif request.method == 'DELETE':
#         try:
#             id = int(request.data.get('id'))
#             book = Book.objects.get(id=id)
#             book.delete()
#             return Response({"message": "Book deleted successfully"})
#         except (ValueError, Book.DoesNotExist):
#             return Response({"error": "Invalid or non-existent book ID"}, status=400)

#     return render(request, 'index.html', {'books': Book.objects.all()})

# def home(request):
#     return render(request, 'index.html', {'books': Book.objects.all()})
