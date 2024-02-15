from django.contrib import admin
from django.urls import path
from .views import GetResume

urlpatterns = [
    path('resume/' , GetResume.as_view() , name = "Reusme uploading" )
    
]