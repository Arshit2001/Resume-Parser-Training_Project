from django.contrib import admin
from django.urls import path
from .views import GetResume, loginLogout , Signup

urlpatterns = [
    path('resume/' , GetResume.as_view() , name = "Reusme uploading" ),
    path('login/' , loginLogout.as_view() , name= " Login Logout"), 
    path('signup/' , Signup.as_view() , name = "signup" ),
]