from rest_framework import serializers

from endpoints.models import *

class TagPackageSerializer(serializers.ModelSerializer):

    class Meta:
        model = TagPackage
        fields = ('latitude', 'longitude', 'notes', 'weather', 'picture')
