from json import JSONEncoder
import json
import os
import ast
import asyncio

from json import JSONEncoder


DATA = {}

def file_async_reader(file):
    result = asyncio.run(read_file(file))
    return result

async def read_file(file, encode=False):
    global DATA
    if os.path.exists(file):
        with open(file, "r") as f:
            info = f.read()
            if info != "":
                DATA = ast.literal_eval(info)
            f.close()
        if isinstance(DATA, list) and encode:
            return CustomJSONEncoder().encode(DATA)
        return DATA



class CustomJSONEncoder(JSONEncoder):

    def __init__(self) :
        super(JSONEncoder, self).__init__() 

    def default(self, o):
        if isinstance(o, list) :
            return o
        return json.JSONEncoder.default(self, o)
