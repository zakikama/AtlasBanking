from django.db import models
from django.contrib.auth.models import User

class Account(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    nom=models.CharField(max_length=200,null=False,blank=False)
    prenom=models.CharField(max_length=200,null=False,blank=False)
    adresse=models.CharField(max_length=200,null=True,blank=True)
    rib=models.CharField(max_length=28,default="MA64230090334232779901260011",null=False,blank=False)
    solde=models.DecimalField(max_digits=10,decimal_places=2,null=False,default=0)
    telephone=models.CharField(max_length=10,null=False)
    DateCreation=models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.rib

