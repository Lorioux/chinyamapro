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
    "SECRET": "dvbnmhbgyuyuijknbhgc vbnbjnhiugyfgc b",
})

CORS(app, resources={r"/*": {"origin": "*"}})

socialfile = "./data/SocialMediaInfo.json"
contactsfile = "./data/ContactInfo.json"


@app.route("/Contact/Create", methods=["POST"])
def create_contact_info():
    

    form = request.form
    
    data = file_async_reader(contactsfile)

    with open(contactsfile, "w+") as f:
        for k, v in form.items():
            data[k] = v
        f.write(str(data))

        f.close()
    return redirect("http://localhost:3000")


@app.route("/SocialMedia/Create", methods=["POST"])
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


@app.route("/SocialMedia/Info")
def get_socialmedia_info():
    
    data = file_async_reader(socialfile)
    return json.dumps(data)

@app.route("/Contact/Info")
def get_contact_info():
    
    data = file_async_reader(contactsfile)
    return json.dumps(data)


async def worker(port):
    
    print("%s" % __DIR__)
    process = await asyncio.create_subprocess_shell("waitress-serve --listen=*:{} app:app".format(port), cwd=__DIR__ , shell=True)
    return app, process


if __name__ == "__main__":
    app.run(debug=True, port=5000)