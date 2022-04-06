import json
import os
import ast
import asyncio

from json import JSONEncoder
from flask import current_app as app
from werkzeug.utils import secure_filename

DATA = {}

def file_async_reader(file):
    result = asyncio.run(read_file(file))
    return result

async def read_file(file, encode=False):
    global DATA
    if os.path.exists(file):
        with open(file, "r+") as f:
            info = f.read()
            if info != "":
                DATA = ast.literal_eval(info)
            f.close()
        if isinstance(DATA, list) and encode:
            return CustomJSONEncoder().encode(DATA)
        return DATA


def upload_image(file, id) :
    
    if file.filename == "" :
        return None

    filename = secure_filename(file.filename)

    # with app.app_context():
        
    file_path = os.path.join(app.config["UPLOAD_PATH"], "media", id, filename)
    os.makedirs(file_path, exist_ok=True, mode=7777)

    file.save(os.path.abspath   (file_path))
    
    return file_path




class CustomJSONEncoder(JSONEncoder):

    def __init__(self) :
        super(JSONEncoder, self).__init__() 

    def default(self, o):
        if isinstance(o, list) :
            return o
        return json.JSONEncoder.default(self, o)

