from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('egyptguide/', views.seedest),
    path('southafricaguide/', views.seedest),
    path('moroccoguide/', views.seedest),

    path('chinaguide/', views.seedest),
    path('japanguide/', views.seedest),
    path('turkeyguide/', views.seedest),

    path('weuropeguide/', views.seedest),
    path('ceuropeguide/', views.seedest),
    path('neuropeguide/', views.seedest),

    path('lesmarquisesguide/', views.seedest),
    path('hawaiisguide/', views.seedest),
    path('boraboraguide/', views.seedest),        
]