import asyncio
import os 
import sys
import json

from flask import Flask, request 

__DIR__ = os.path.dirname(__file__)
sys.path.insert(0, __DIR__)

app = Flask(__name__)

file = "/data/testimonial.json"

@app.route("/testemonial/info", methods=["GET"])
def read_all_info():
    with open(file, "r") as f:
        data = json.load(f)
        f.close()

    return data, 200


async def worker(port):
    
    print("%s" % __DIR__)
    process = await asyncio.create_subprocess_shell("waitress-serve --listen=*:{} app:app".format(port), cwd=__DIR__ , shell=True)
    return app, process

async def main():
    app.run(host="0.0.0.0", debug=True, port=5005)

if __name__ == "__main__":
    asyncio.run(main())
