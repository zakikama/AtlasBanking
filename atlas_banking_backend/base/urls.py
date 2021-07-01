from django.urls import path
from . import views

urlpatterns=[
    path('',views.MyRoutes.as_view(),name='routes'),
]