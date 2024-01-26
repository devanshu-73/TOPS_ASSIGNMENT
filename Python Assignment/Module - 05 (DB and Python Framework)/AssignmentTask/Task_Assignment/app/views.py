# myapp/views.py
from django.shortcuts import render, get_object_or_404
from .models import *

def product_manager(request):
    products = ProductMst.objects.all()
    context = {
         'products': products,
    }
    return render(request, 'app/product_manager.html', context)

def product_details(request, product_id):
    product = get_object_or_404(ProductMst, pk=product_id)
    details = ProductSubCat.objects.filter(product=product)
    context = {
         'product': product,
         'details': details,
    }
    return render(request, 'app/product_details.html',context)
