from django.contrib import admin
from .models import Event, Registration

# Register your models here.
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):

    list_display=('title','date','location','status')   

    list_filter = ('status','date')


@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "email",
        "event",
        "created_at",
    )