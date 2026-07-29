from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Event 
from .serializers import EventSerializer 


class EventListAPIView(APIView):

    def get(self,request):

        events = Event.objects.all()

        serializer = EventSerializer(
            events,
            many=True
        )

        return Response(serializer.data)


class EventDetailAPIView(APIView):

    def get(self,request,pk):

        events = get_object_or_404(Event, pk=pk)

        serializer = EventSerializer(events)

        return Response(serializer.data)
