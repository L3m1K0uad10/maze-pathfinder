from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .maze_utils import generate_maze 


@api_view(["GET"])
def generate_maze_view(request):

    rows = int(request.GET.get("rows", 15))
    cols = int(request.GET.get("cols", 15))
    maze = generate_maze(rows, cols)
    
    return Response({"maze": maze})