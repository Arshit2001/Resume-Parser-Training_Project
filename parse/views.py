from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .utils import *
from .models import UserDetails
from .serializers import UserSerializer
from rest_framework import status


# Create your views here.


class GetResume(APIView):
    def post(self,request):
        file_obj = request.FILES['file']
        final_response=objToText(file_obj)
        return Response(final_response , status = status.HTTP_200_OK)
    
class loginLogout(APIView):
    def post(self,request):
        user_details=request.data
        user = UserDetails.objects.filter(email=user_details['email']).first()
        serializer=UserSerializer(user)
        print(serializer.data)
        if user_details['password']==serializer.data['password']:
            
            return Response({"message":"TRUE" , "user": serializer.data['name']} , status = status.HTTP_200_OK)
        else:
            return Response({'message' : 'Invalid Credentials'} , status=status.HTTP_401_UNAUTHORIZED)
    

class Signup(APIView):
    def post(self,request):
        user_details = request.data
        user_check = UserDetails.objects.filter(email=user_details['email']).first()
        if user_check is None:
            new_user = UserDetails(name=user_details['name'], email=user_details['email'], password=user_details['password'])
            new_user.save()
            return Response({"message" : "User Created "} , status = status.HTTP_200_OK)
        else :
            return Response ({"message" : "Email exists"}, status=status.HTTP_409_CONFLICT)




        

        

        


