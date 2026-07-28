from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer): # purpose: convert event model instances into JSON format 

    class Meta:
        model = Event
        fields = '__all__'
