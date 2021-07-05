from django.urls import path
from . import views

urlpatterns=[
    path('',views.MyRoutes.as_view(),name='routes'),
    path('Accounts/',views.AccountsList.as_view(),name="Accounts"),
    path('Accounts/<int:pk>',views.Account01View.as_view(),name="Account"),
    
]