from PIL import Image
import sys

def remove_background(img_path, out_path):
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # We will use BFS to flood fill the background starting from the top-left corner
    # Assuming top-left corner is background.
    
    # Let's consider anything close to white as background
    def is_bg(c):
        return c[0] > 240 and c[1] > 240 and c[2] > 240 and c[3] > 0

    if not is_bg(pixels[0, 0]):
        print("Top left is not white!")
        # Try finding a white pixel on the edge
    
    queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    visited = set(queue)
    
    # BFS
    while queue:
        x, y = queue.pop(0)
        
        if is_bg(pixels[x, y]):
            pixels[x, y] = (255, 255, 255, 0) # make transparent
            
            # Add neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))

    img.save(out_path, "PNG")
    print(f"Saved {out_path}")

import glob
img_path = glob.glob('/Users/macbook/.gemini/antigravity/brain/36195cfe-a1ed-4a24-aaf6-89d8dccc85f5/ac_solid_white_*.jpg')[0]
remove_background(img_path, '/Users/macbook/Desktop/Кондиционеры/assets/images/floating_ac.png')
