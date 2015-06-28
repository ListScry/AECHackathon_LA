from django.db import models

class TagPackage(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    notes = models.TextField()
    weather = models.TextField()
    picture = models.TextField()
    tag_type = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
