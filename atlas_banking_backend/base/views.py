from django.db.models.query import QuerySet
from rest_framework.views import APIView
from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from .models import Account
from .serializers import AccountSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response






class MyRoutes(View):
    def get(self,request):
        return JsonResponse('Hello',safe=False)
class AccountsList(APIView):
    def get(self,request):
        Accounts =Account.objects.all()
        serializer =AccountSerializer (Accounts,many=True)
        return Response(serializer.data)
    def post(self,request):
        data={
            'nom':request.data.get('nom'),
            'prenom':request.data.get('prenom'),
            'adresse':request.data.get('adresse'),
            'rib':request.data.get('rib'),
            'solde':request.data.get('solde'),
            'telephone':request.data.get('telephone'),
        }
        serializer=AccountSerializer(data=data,many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            print('erreur: ',serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class AccountView(APIView):
    def get(self,request,pk):
        Account.objects.get(id=pk)
        serializer=AccountSerializer(Account,many=False)
        return Response(serializer.data)
class Account01View(generics.RetrieveAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    
    def put (self,request,pk):
        data={
            'nom':request.data.get('nom'),
            'prenom':request.data.get('prenom'),
            'adresse':request.data.get('adresse'),
            'rib':request.data.get('rib'),
            'solde':request.data.get('solde'),
            'telephone':request.data.get('telephone'),
        }
        account=Account.objects.get(id=pk)
        serializer=AccountSerializer(account,data=data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            print('error',serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
