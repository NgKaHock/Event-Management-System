from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Event, Registration
from .serializers import EventSerializer, RegistrationSerializer



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


class RegistrationCreateAPIView(APIView):

    def post(self, request):

        event_id = request.data.get("event")

        event = get_object_or_404(
            Event,
            id=event_id
        )


        if event.registered_count >= event.capacity:

            return Response(
                {
                    "error":"Event is full"
                },
                status=400
            )


        serializer = RegistrationSerializer(
            data=request.data
        )


        if serializer.is_valid():

            serializer.save()

            event.registered_count += 1
            event.save()


            return Response(
                serializer.data,
                status=201
            )


        return Response(
            serializer.errors,
            status=400
        )