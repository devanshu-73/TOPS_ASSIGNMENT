# myapp/admin.py
from django.contrib import admin
from .models import ProductMst, ProductSubCat

class ProductMstAdmin(admin.ModelAdmin):
    list_display = ['product_id','product_name']

admin.site.register(ProductMst,ProductMstAdmin)
admin.site.register(ProductSubCat)
