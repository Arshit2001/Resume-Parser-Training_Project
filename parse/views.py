from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .utils import *


# Create your views here.


class GetResume(APIView):
    def post(self,request):
        file_obj = request.FILES['file']
        final_response=objToText(file_obj)
        return Response(final_response)

