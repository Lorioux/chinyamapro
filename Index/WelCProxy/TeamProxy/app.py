import sys 
import os
import asyncio

__DIR__ = os.path.dirname(__file__)
sys.path.insert(0, __DIR__)

from flask import Flask, redirect, request 
from TeamProxy.utils import file_async_reader


app = Flask(__name__)


member = [
    {
        "fullname": "Hendrik Jack",
        "photo": None,
        "summary": None,
        "socialmedia": {
            "facebook": "#",
            "skype": "#",
        }
    }]

memberfile = "./data/Members.json"

@app.route("/Core/Team/CreateMember", methods=["POST"])
def create_team_member():

    form = request.form
    data = file_async_reader(memberfile)

    if not data:
        data = {}

    return redirect("http://localhost:3000/EditX")


async def worker(port):
    
    print("%s" % __DIR__)
    process = await asyncio.create_subprocess_shell("waitress-serve --listen=*:{} app:app".format(port), cwd=__DIR__ , shell=True)
    return app, process


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)