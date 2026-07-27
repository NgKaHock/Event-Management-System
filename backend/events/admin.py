from django.contrib import admin
from .models import Event

# Register your models here.
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):

    list_display=('title','date','location','status')   

    list_filter = ('status','date')

