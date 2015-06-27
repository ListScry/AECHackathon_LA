
from . import views
from rest_framework.routers import DefaultRouter

from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r"^CreateTagPackage/$", views.create_tag_package),
    url(r"^GetAllTagPackages/$", views.get_all_tag_packages),
    url(r'^$', views.index, name='index'),
)
