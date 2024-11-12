from django.contrib import admin
from django.urls import path
from .views import generate_maze_view


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/generate-maze/', generate_maze_view, name = "generate-maze"),
]
