from django.db import models
from django.utils import timezone
from photologue.models import Gallery, Photo

class Post(models.Model):
	title = models.CharField(max_length=200)
	width = models.IntegerField(default=0, blank=True, null=True)
	height = models.IntegerField(default=0, blank=True, null=True)
	avatar = models.ImageField(null = True, blank=True, width_field="width", height_field="height")
	gallery = models.ForeignKey(Gallery)

	def __str__(self):
		return self.title



class PostPhoto(models.Model):
	title = models.CharField(max_length=200)
	post = models.ForeignKey(Post)
	width = models.IntegerField(default=0)
	height = models.IntegerField(default=0)
	image = models.ImageField(null = False, blank=False, width_field="width", height_field="height")


	def __str__(self):
		return self.title



	


		

