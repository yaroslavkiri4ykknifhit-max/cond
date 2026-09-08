import urllib.request
import ssl
import os

urls = [
    # Modern LG dual inverter
    "https://www.lg.com/content/dam/channel/wcms/za/images/air-conditioners/s4nw12ja3aa-afzbzaf_en/gallery/S4NW12JA3AA_AFZBZA_EN_Air-Conditioners_Gallery_01_MZ.png",
    # Modern Daikin
    "https://www.daikin.com.au/sites/default/files/styles/product_gallery_large/public/zena-indoor_0.png",
    "https://pngimg.com/uploads/air_conditioner/air_conditioner_PNG57.png",
    "https://pngimg.com/uploads/air_conditioner/air_conditioner_PNG49.png"
]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

out_path = '/Users/macbook/Desktop/Кондиционеры/assets/images/floating_ac.png'

for url in urls:
    try:
        print(f"Trying {url} ...")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            if response.status == 200:
                with open(out_path, 'wb') as f:
                    f.write(response.read())
                print(f"Success! Downloaded {url}")
                break
    except Exception as e:
        print(f"Failed: {e}")

