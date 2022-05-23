import asyncio
import os 
import sys

from flask import Flask, redirect, request
from flask_cors import CORS


__DIR__ = os.path.dirname(__file__ )
sys.path.insert( 0, __DIR__ )

PROXY_APP = None

SERVER_NAME = os.environ.get("SERVER_NAME", None )
if SERVER_NAME is None:
    DEST_HOST = "http://{}".format("127.0.0.1")
else:
    DEST_HOST = "https://{}".format(SERVER_NAME)


middleware = __import__("proxies_middleware")


app  = Flask(__name__)
app.config["APPLICATION_ROOT"] = "gateways-proxy"
CORS(app)

@app.route("/<path:path>", methods=["GET", "POST"])
def index(path):
    
    url = middleware.route(request.path, DEST_HOST)
    print(url)

    if request.method == "GET":
        return redirect(url, code=307)

    if request.method == "POST":
        return redirect(url, method=request.method, data=request.data, code=307)


async def worker(port=None):
    
    if SERVER_NAME is None:
        await middleware.__launch__()
    if port is None:
        await asyncio.create_subprocess_shell('''
            export FLASK_ENV=development
            flask run --port 8080 
            ''', shell=True, cwd=__DIR__)
    else:
        await asyncio.create_subprocess_shell("waitress-serve --listen=*:{} app:app".format(port), cwd=__DIR__ , shell=True)
    

if __name__ == "__main__":
    asyncio.run(worker())
