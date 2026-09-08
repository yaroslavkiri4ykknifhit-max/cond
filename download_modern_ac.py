import urllib.request
import ssl

url = "https://freepngimg.com/thumb/air_conditioner/5-2-air-conditioner-png-hd.png"
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
        with open("/Users/macbook/Desktop/Кондиционеры/assets/images/floating_ac.png", 'wb') as f:
            f.write(response.read())
    print("Downloaded modern AC!")
except Exception as e:
    print("Failed", e)
