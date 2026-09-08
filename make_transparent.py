from PIL import Image
import glob

# Find the generated image
img_path = glob.glob('/Users/macbook/.gemini/antigravity/brain/36195cfe-a1ed-4a24-aaf6-89d8dccc85f5/ac_solid_white_*.jpg')[0]

img = Image.open(img_path)
img = img.convert("RGBA")
datas = img.getdata()

newData = []
# It's a JPEG, so white might not be exactly 255,255,255. Let's use a threshold.
for item in datas:
    # If pixel is very close to white, make it transparent
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save("/Users/macbook/Desktop/Кондиционеры/assets/images/floating_ac.png", "PNG")
print("Saved transparent PNG")
