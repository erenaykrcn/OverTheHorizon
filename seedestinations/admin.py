from django.contrib import admin
from .models import Destination


class DestAdmin(admin.ModelAdmin):
    list_display = ("name", "box1")


admin.site.register(Destination, DestAdmin)
