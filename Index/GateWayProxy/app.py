import asyncio
import os 
import sys

from flask import Flask, redirect, request


BASE_DIR = os.path.dirname(__file__ )
sys.path.insert( 0, BASE_DIR )

PROXY_APP = None

SERVER_NAME = os.environ.get("SERVER_NAME", None )
if SERVER_NAME is None:
    DEST_HOST = "http://{}".format("127.0.0.1")
else:
    DEST_HOST = "https://{}".format(SERVER_NAME)


rb = __import__("routes_broke")

app  = Flask(__name__)

@app.route("/<path:path>", methods=["GET", "POST"])
def index(path):
    
    url = rb.processor(request.path, DEST_HOST)

    if request.method == "GET":
        
        return redirect(url)

    if request.method == "POST":
        return redirect(url, method=request.method, data=request.data, code=307)


async def worker():
    await asyncio.create_subprocess_shell('''
    export FLASK_ENV=development
    flask run --port 8080
    ''', shell=True, cwd=BASE_DIR)


if __name__ == "__main__":
    asyncio.run(worker())
