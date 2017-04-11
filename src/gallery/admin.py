from django.contrib import admin
from .models import PostPhoto, Post

class Photoall(admin.ModelAdmin):
	list_display = ["title"]

	class Meta:
		model = PostPhoto

	def __str__(self):
		return self.title

class Preview(admin.ModelAdmin):
	list_display = ["title"]

	class Meta:
		model = Post





admin.site.register (Post, Preview)
admin.site.register (PostPhoto, Photoall)
