from django.urls import path
from . import views
#url patterns are defined below

urlpatterns = [
    path("",views.home, name = "home"),
    path("template_form",views.template_form, name="template_form"),
]
