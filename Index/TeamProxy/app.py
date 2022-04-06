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