# myproject/urls.py
from django.contrib import admin
from django.urls import path, include
import myapp

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),
]
