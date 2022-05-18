
import asyncio
import os 
import sys

from flask import Flask, redirect, request


BASEDIR = os.path.dirname(__file__ )
sys.path.insert( 0, BASEDIR )

from utils import (file_async_reader, upload_image)


app = Flask(__name__)  

app.config["SECRET"] = "fghjkloiuhghnbgyuikliuygghjkmnbk"
app.config["UPLOAD_PATH"] = "storage"

offersfile = "./data/ServiceOffers.json"
coreservice = "./data/CoreServices.json"

@app.route("/core/service/create", methods=["POST"])
def create_service():

    form = request.form
    file = request.files['imagelnk']

    for k, v in form.items():
        print("%s %s" % (k, v))

    data = file_async_reader(coreservice)

    if not data:
        data = {}
    
    with open(coreservice, "w+") as f:
        image_path = upload_image(file, form['title'])
        for k, v in form.items():
            data[k] = { k: v }
        data[k]['imagelnk'] = image_path

        f.write(str(data))

    return redirect("http://localhost:3000/EditX")


async def worker():
    await asyncio.create_subprocess_shell('''
    export FLASK_ENV=development
    flask run --port 8080
    ''', shell=True, cwd=BASEDIR)


if __name__ == "__main__":
    app.run(debug=True)