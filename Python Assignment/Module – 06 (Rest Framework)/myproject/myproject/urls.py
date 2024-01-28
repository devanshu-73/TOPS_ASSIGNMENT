from django.contrib import admin
from django.urls import path,include
from myapp import urls
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('myapp.urls') ),
]
