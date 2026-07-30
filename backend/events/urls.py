from django.urls import path
from .views import EventListAPIView, EventDetailAPIView, RegistrationCreateAPIView

urlpatterns =[

    path(
        "events/",
        EventListAPIView.as_view(),
        name = "event-list"
    ),

    path(
        "events/<int:pk>/",
        EventDetailAPIView.as_view(),
        name = "event-detail"
    ),

    path(
    "register/",
    RegistrationCreateAPIView.as_view()
),
    
]