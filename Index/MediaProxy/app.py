from fileinput import filename
from flask import Flask, redirect, send_file, url_for






app = Flask(__name__)

app.config["SECRET"] = "dfghjkiouytgfvbnmjyutgfvbnhjuyt"

@app.route("/<path:path>", methods=["GET"])
def index(path):
    return send_file("."+ url_for("static", filename="{}".format(path)))


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)