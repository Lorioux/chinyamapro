from flask import Flask 
from flask import render_template

from . import settings


app = Flask(__name__)


app.config.from_object(settings.TestingConfig)

@app.route("/")
def authenticate():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)