import sys 
import os
import asyncio

__DIR__ = os.path.dirname(__file__)
sys.path.insert(0, __DIR__)

from flask import Flask, jsonify, redirect, request 
from utils import file_async_reader


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

@app.route("/team/member/create", methods=["POST"])
def create_team_member():

    form = request.form
    data = file_async_reader(memberfile)

    if not data:
        data = {}

    return jsonify({'status': 200, "message": "Member added"})

@app.route("/team/members", methods=["GET"])
def members():
    return jsonify({"status": 200, members: []})



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