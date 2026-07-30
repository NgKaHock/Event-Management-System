from rest_framework import serializers
from .models import Event, Registration


class EventSerializer(serializers.ModelSerializer): # purpose: convert event model instances into JSON format 

    class Meta:
        model = Event
        fields = '__all__'



class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        fields = "__all__"

    