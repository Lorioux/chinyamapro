from flask import Flask, redirect, send_file, url_for, request
_proxy = __import__('proxy')


credentials = _proxy.credentials
create_storage = _proxy.create_storage

app = Flask(__name__)

app.config["SECRET"] = "dfghjkiouytgfvbnmjyutgfvbnhjuyt"

@app.route("/", methods=["GET"])
def proxy(path=None):
    template = '''
    <form style="border: 1px dotted grey; padding: 10px;">
        <input type="file" name="photo" multiple /></br></br>
        <button>save</button>
    </form></br></br>

    <form style="border: 1px dotted grey; padding: 10px;">
        <input type="file" name="photo" multiple /></br></br>
        <button>save</button>
    </form ></br></br>

    <form style="border: 1px dotted grey; padding: 10px;" method="POST" action="/projects/3456-3456-5678-5678" enctype="multipart/form-data">
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
    _proxy.create_media(name, source, True, False)
    return {"message": "Done!"}, 200


@app.route("/members/<path:path>", methods=['POST'])
def members_media_proxy(path = None):
    # name = request.path
    _proxy.save_outro_media(request)
    return {"message": "Done!"}, 200

@app.route("/projects/<path:path>", methods=['POST'])
def projects_media_proxy(path = None):
    _proxy.save_outro_media(request)
    
    return {"message": "Done!"}, 200

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)