from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    isbn = models.CharField(max_length=13)
    publisher = models.CharField(max_length=30)

    def __str__(self):
        return self.title
