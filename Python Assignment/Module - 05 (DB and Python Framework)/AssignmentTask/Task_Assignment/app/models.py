# app/models.py
from django.db import models

class ProductMst(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=30)

    def __str__(self):
        return self.product_name

class ProductSubCat(models.Model):
    product = models.ForeignKey(ProductMst, on_delete=models.CASCADE)
    price = models.CharField(max_length=10)
    image = models.FileField(upload_to='product_images/')
    model = models.CharField(max_length=30)
    ram = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.product.product_name} - {self.model}"
