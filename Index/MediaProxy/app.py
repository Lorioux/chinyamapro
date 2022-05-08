import asyncio
import os
import sys
from flask import Flask, request

from flask_cors import CORS

__DIR__ = os.path.dirname(__file__)

sys.path.insert(0, __DIR__)

# from . import proxy as _proxy

_proxy = __import__('proxy')


# credentials = _proxy.credentials
create_storage = _proxy.create_storage

app = Flask(__name__)

app.config["SECRET"] = "dfghjkiouytgfvbnmjyutgfvbnhjuyt"

CORS(app, resources={r"/static/fonts/*" : {"origin": "*"}})

@app.route("/media", methods=["GET"])
def index(path=None):
    template = '''
    <form style="border: 1px dotted grey; padding: 10px;"
        method="POST" action="media/3456-3456-5678-5678" enctype="multipart/form-data">
        <input type="file" name="photo" multiple /></br></br>
        <button>save</button>
    </form></br></br>

    <form style="border: 1px dotted grey; padding: 10px;" 
        method="POST" action="members/3456-3456-5678-5678" enctype="multipart/form-data">
        <input type="file" name="photo" multiple /></br></br>
        <button>save</button>
    </form ></br></br>

    <form style="border: 1px dotted grey; padding: 10px;" 
        method="POST" action="projects/3456-3456-5678-5678" enctype="multipart/form-data">
        <input type="text" name="name" multiple /></br></br>
        <input type="file" name="photo" multiple /></br></br>
        <button>save</button>
    </form></br></br>
    '''
    return template, 200 #send_file("."+ url_for("static", filename="{}".format(path)))


@app.route("/media/<path:path>", methods=['POST'])
def generic_media_proxy(path = None):
    name = request.path
    if path:
        source = path
    else:
        source = './static'
    _proxy.create_media(name, source, "directory" , True, False)
    return {"message": "Done!"}, 200


@app.route("/members/<path:path>", methods=['POST'])
def members_media_proxy(path = None):
    # name = request.path
    _proxy.save_outro_media(request)
    return {"message": "Done!"}, 200


@app.route("/projects/<path:path>", methods=['POST'])
def projects_media_proxy(path = None):
    entity = request.path
    files = request.files
    _proxy.save_outro_media(entity, files)
    return {"message": "Projects saved!"}, 200

async def worker(port):
    
    print("%s" % __DIR__)
    process = await asyncio.create_subprocess_shell("waitress-serve --listen=*:{} app:app".format(port), cwd=__DIR__ , shell=True)
    return app, process

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
