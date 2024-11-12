import random


def generate_maze(rows, cols):

    #initializing grid with all walls
    maze =[
        [{"type": "wall"} for _ in range(cols)] 
        for _ in range(rows)
    ]

    def carve_path(row, col):
        """ 
        Recursive DFS function to carve paths
        """
        directions = [
            (0, 2),  # down
            (0, -2), # up
            (2, 0),  # right
            (-2, 0)  # left
        ]

        # shuffling directions for randomness
        random.shuffle(directions)

        for d_row, d_col in directions:
            new_row, new_col = row + d_row, col + d_col
            if 0 <= new_row < rows and 0 <= new_col < cols and maze[new_row][new_col]["type"] == "wall":
                # Carve path between cells
                maze[row + d_row // 2][col + d_col // 2] = {"type": "path"}
                maze[new_row][new_col] = {"type": "path"}
                carve_path(new_row, new_col)
    
    # Setting the start point and end point
    maze[0][0] = {"type": "start"}
    carve_path(0, 0)
    maze[rows - 1][cols - 1] = {"type": "end"}

    return maze
