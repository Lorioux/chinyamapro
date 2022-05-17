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
CORS(app, resources={r"/*": { "origin": "*" } })

@app.route("/<path:path>")
def index(path=None):
    file = open(__DIR__ + "/data/services.json", "r")
    data = file.read()
    file.close()
    return data

# @app.route("/Service/Add", methods=["POST"])
# def add_service():
#     if request.method == "GET":
#         template = '''
#         <form>
#         </form>       
#         '''


async def worker(port):
    
    print("%s" % __DIR__)
    process = await asyncio.create_subprocess_shell("waitress-serve --listen=*:{} app:app".format(port), cwd=__DIR__ , shell=True)
    return app, process

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5004)