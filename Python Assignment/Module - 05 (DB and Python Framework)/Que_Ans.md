## (1) Why Django should be used for web-development? Explain how you can create a project in Django?

    - Django is a high-level Python web framework and follows the "Don't Repeat Yourself" (DRY) principle.
    - Use the command: django-admin startproject projectname

## (2) How to check installed version of django?

    - python -m django --version

## (3) Explain what does django-admin.py make messages command is used for?

    - It is used to create or update message files for internationalization and localization.

## (4) What is Django URLs ? make program to create django urls

    - Django URLs are used to map URLs to views.

### Example code:

    - from django.urls import path
      from . import views

      urlpatterns = [
        path('home/', views.home, name='home'),
      ]

## (5) What is a QuerySet?Write program to create a new Post object in database

    - A QuerySet is a collection of database queries that can be filtered and manipulated.

### Example code:

    - from yourapp.models import Post
    post = Post.objects.create(title='New Post', content='This is a new post.')

## (6) Mention what command line can be used to load data into Django?

    - python manage.py loaddata filename
