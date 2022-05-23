from re import template
import sys 
import os
import asyncio

from requests import request


__DIR__ = os.path.dirname(__file__)
sys.path.insert(0, __DIR__)

from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/<path:path>")
def index(path=None):
    file = open(__DIR__ + "/data/services.json", "r")
    data = file.read()
    file.close()
    return data


async def worker(port = None):
    if port is None:
        process = await asyncio.create_subprocess_shell('''
            export FLASK_ENV=development
            flask run --port 8080
            ''', shell=True, cwd=__DIR__)
    else:
        process = await asyncio.create_subprocess_shell("waitress-serve --listen=*:{} app:app".format(port), cwd=__DIR__ , shell=True)
    return app, process
    

if __name__ == "__main__":
    asyncio.run(worker())