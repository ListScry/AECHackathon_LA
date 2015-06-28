
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.http import HttpResponse
from endpoints.models import *
from endpoints.serializers import *
from rest_framework.response import Response
import jsonpickle

@csrf_exempt
@require_POST
def create_tag_package(request):

    # get the post's params
    params = request.POST
    latitude = params["latitude"]
    longitude = params["longitude"]
    notes = params["notes"]
    picture = params["picture"]
    tag_type = params["type"]

    TagPackage.objects.create(latitude=latitude, longitude=longitude, notes=notes, weather="", picture=picture,
                              tag_type=tag_type)

    return HttpResponse("Success", content_type="application/json")

@csrf_exempt
def get_all_tag_packages(request):

    all_tag_packages = TagPackage.objects.all()

    #response = jsonpickle.encode(all_tag_packages)

    #serializer = TagPackageSerializer(all_tag_packages, many=True)
    #return Response(serializer.data)

    first = True
    response = "["
    for tp in all_tag_packages:
        if first:
            first = False
        else:
            response += ","
        response += "{"
        response += "\"id\":" + str(tp.id) + ","
        response += "\"latitude\":" + str(tp.latitude) + ","
        response += "\"longitude\":" + str(tp.longitude) + ","
        response += "\"notes\": \"" + tp.notes + "\","
        response += "\"weather\": \"" + tp.weather + "\","
        response += "\"picture\": \"" + tp.picture + "\","
        response += "\"type\": " + str(tp.tag_type) + ","
        response += "\"timestamp\": \"" + tp.timestamp.isoformat() + "\""
        response += "}"

    response += "]"

    return HttpResponse(response, content_type="application/json")


def test_endpoint(request):
    return HttpResponse("Test endpoint")

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

# endregion