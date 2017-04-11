from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from gallery.views import Index, Gallery
from gallery import views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', Index.as_view()),
 
    ]

urlpatterns += [

    url(r'^photologue/', include('photologue.urls', namespace='photologue')),
]

if settings.DEBUG:
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

