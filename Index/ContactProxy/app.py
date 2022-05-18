import json
import asyncio
import sys
import os

from flask import Flask, request, redirect

from flask_cors import CORS

__DIR__ = os.path.dirname(__file__)
sys.path.insert(0, __DIR__)


from utils import file_async_reader



app = Flask(__name__)
app.config.from_mapping({
    "SECRET": "dvbnmhbgyuyuijknbhgcvbnbjnhiugyfgcb",
})

CORS(app, resources={r"/*": {"origin": "*"}})

socialfile = "./data/SocialMediaInfo.json"
contactsfile = "./data/ContactInfo.json"


@app.route("/contact/create", methods=["POST"])
def create_contact_info():
    

    form = request.form
    
    data = file_async_reader(contactsfile)

    with open(contactsfile, "w+") as f:
        for k, v in form.items():
            data[k] = v
        f.write(str(data))

        f.close()
    return redirect("http://localhost:3000")


@app.route("/socialmedia/create", methods=["POST"])
def create_socialmedia_info():

    form = request.form
    
    data = file_async_reader(socialfile)
    if not data:
        data = {}

    with open(socialfile, "w+") as f:
        for k, v in form.items():
            data[k] = v
        f.write(str(data))

        f.close()
    return redirect("http://localhost:3000")


@app.route("/socialmedia/info")
def get_socialmedia_info():
    
    data = file_async_reader(socialfile)
    return json.dumps(data)

@app.route("/contact/info")
def get_contact_info():
    
    data = file_async_reader(contactsfile)
    return json.dumps(data)


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