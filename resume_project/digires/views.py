from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,"digires/home.html")

def template_form(request):
    return render(request,"digires/template_form.html")