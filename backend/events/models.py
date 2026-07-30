from django.db import models

# Create your models here.
class Event (models.Model):

    STATUS_CHOICES =[
        ('ACTIVE','Active'),
        ('CANCELLED','Cancelled'),
        ('FULL','Full'),
    ]

    title = models.CharField(max_length=200)

    description = models.TextField(
        blank = True
    )

    date = models.DateField()

    start_time = models.TimeField()

    end_time = models.TimeField()

    location = models.CharField(
        max_length=200
    )

    capacity = models.IntegerField(
        default = 0
    )

    status = models.CharField(
        max_length = 20,
        choices = STATUS_CHOICES,
        default = 'ACTIVE' 
    )

    created_at = models.DateTimeField(
        auto_now_add = True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.title


class Registration(models.Model):

    event = models.ForeignKey(
        Event,
        on_delete=models.CASCADE,
        related_name="registrations"
    )

    name = models.CharField(
        max_length=100
    )

    email = models.EmailField()

    university = models.CharField(
        max_length=200
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )


    def __str__(self):
        return f"{self.name} - {self.event.title}"
