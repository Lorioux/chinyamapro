
import asyncio
import os 
import sys

from flask import Flask, redirect, request
from flask_cors import CORS


__DIR__ = os.path.dirname(__file__ )
sys.path.insert( 0, __DIR__ )

from utils import (file_async_reader)


app = Flask(__name__)  
app.config["SECRET"] = "fghjkloiuhghnbgyuikliuygghjkmnbk"
app.config["APPLICATION_ROOT"] = "disclaims-proxy"

CORS(app)

offersfile = "./data/ServiceOffers.json"
coreservice = "./data/CoreServices.json"

@app.route("/core/service/create", methods=["POST"])
def create_service():
    '''Redirect to Media to upload image and retrieve link
    '''

    form = request.form
    file = request.files['imagelnk']

    for k, v in form.items():
        print("%s %s" % (k, v))

    data = file_async_reader(coreservice)

    if not data:
        data = {}
    
    with open(coreservice, "w+") as f:
        image_path = "upload_image(file, form['title'])"
        for k, v in form.items():
            data[k] = { k: v }
        data[k]['imagelnk'] = image_path

        f.write(str(data))

    return redirect("http://localhost:3000/EditX")


async def worker(port = None):
    if port is None:
        await asyncio.create_subprocess_shell('''
            export FLASK_ENV=development
            flask run --port 8080
            ''', shell=True, cwd=__DIR__)
    else:
        await asyncio.create_subprocess_shell("waitress-serve --listen=*:{} app:app".format(port), cwd=__DIR__ , shell=True)


if __name__ == "__main__":
    asyncio.run(worker())