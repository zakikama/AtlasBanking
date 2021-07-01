from django.shortcuts import render
from django.http import JsonResponse
from django.views import View

class MyRoutes(View):
    def get(self,request):
        return JsonResponse('Hello',safe=False)
