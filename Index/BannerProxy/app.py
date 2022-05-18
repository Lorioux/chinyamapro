import ast
from importlib import import_module
import uuid
# import json
import os 
import sys
import asyncio

from flask import Flask, redirect, request, send_file, jsonify

__DIR__ = os.path.dirname(__file__)
sys.path.insert(0, __DIR__)

_utils = import_module("utils")
# from .utils import _utils.upload_image
PROXY_APP = None

app = Flask(__name__)
app.config["APPLICATION_ROOT"] = "/banners-proxy"

app.config.from_mapping({
    "SECRET": "gvbhjmklççmbnfcrhdf6t7yo8up9joçlmk",
    "UPLOAD_PATH": "static",
})


@app.route("/")
def proxy():
    return jsonify({'status': 200, "message": "Banners"})

@app.route("/AddBanner", methods=["GET","POST"])
def create():
    
    if request.method == "POST":
        form = request.form

        file = request.files["file"]
    
        with open("data/BannerRegistry.json", "r+") as _file:
            banners = _file.read()
            if banners == "":
                banners = []
            else:
                banners = ast.literal_eval(banners)
            _file.close()

        with open("data/BannerRegistry.json", "w") as _file:
            print(banners)
            banner_id = uuid.uuid4().hex
            data = {
                "id": banner_id,
                "header": form.get("header"),
                "subheader": form.get("subheader"),
                "summary": form.get("summary"),
                "image": _utils.upload_image(file, banner_id),
            }

            banners.insert(0, data)
            
            try:
                _file.write(str(banners))

                _file.close()

            except Exception as e:
                print("Error while creating: {}".format(e))

            return redirect("http://localhost:3000/Banners")

    else:
        return '''
            <input type="text" />
            ''', 200


@app.route("/img/<path:path>", methods=["GET"])
def retrive_image(path):
    file =  "static" + request.path
    return send_file(file, mimetype="image/jpg")


async def worker(port=None):
    if port is None:
        process = await asyncio.create_subprocess_shell('''
                    export FLASK_ENV=development
                    flask run --port 8080
                    ''', shell=True, cwd=__DIR__)
        print(process)
    else:
        process = await asyncio.create_subprocess_shell(
                    "waitress-serve --listen=*:{} app:app".format(port), 
                    cwd=__DIR__ , shell=True)
    return app, process    


if __name__ == "__main__":
    asyncio.run(worker())