import asyncio
import os 
import sys
import json

from flask import Flask
from flask_cors import CORS

__DIR__ = os.path.dirname(__file__)
sys.path.insert(0, __DIR__)

app = Flask(__name__)
CORS(app)

file = "./data/testimonial.json"

@app.route("/testimonial/all", methods=["GET"])
def read_all_info():
    with open(file, "r") as f:
        data = json.load(f)
        f.close()

    return data


async def worker(port=None):
    if port is None:
        process = await asyncio.create_subprocess_shell('''
            export FLASK_ENV=development
            flask run --port 8080
            ''', shell=True, cwd=__DIR__)
    else:
        process = await asyncio.create_subprocess_shell("waitress-serve --listen=*:{} app:app".format(port), cwd=__DIR__ , shell=True)
    return app, process
    

if __name__ == "__main__":
    asyncio.run(worker)
