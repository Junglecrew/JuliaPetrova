from django.shortcuts import render, render_to_response
from .models import Post, PostPhoto, Gallery
from django.views.generic import TemplateView
from django.views.generic import ListView


class Index(ListView):
	model = Post
	template_name = "index.html"


class Gallery(ListView):
	model = Post
	template_name = "detail.html"


