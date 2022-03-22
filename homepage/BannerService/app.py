import ast
import uuid
import json

from flask import Flask, make_response, redirect, render_template, request, send_file 

from .utils import upload_image




app = Flask(__name__)

app.config.from_mapping({
    "SECRET": "gvbhjmklççmbnfcrhdf6t7yo8up9joçlmk",
    "UPLOAD_PATH": "static",
})

# @app.route("/AddBanner")
@app.route("/AddBanner", methods=["POST"])
def create():
    
    if request.method == "POST":
        form = request.form

        file = request.files["file"]
    

        with open("data/BannerRegistry.json", "r+") as _file:
            banners = _file.read()
            if banners == "":
                banners = []
            else:
                banners = ast.literal_eval(banners)
            _file.close()

        with open("data/BannerRegistry.json", "w") as _file:
            print(banners)
            banner_id = uuid.uuid4().hex
            data = {
                "id": banner_id,
                "header": form.get("header"),
                "subheader": form.get("subheader"),
                "summary": form.get("summary"),
                "image": upload_image(file, banner_id),
            }

            banners.insert(0, data)
            
            try:
                _file.write(str(banners))

                _file.close()

            except Exception as e:
                print("Error while creating: {}".format(e))

            return redirect("http://localhost:3000/Banners")

    else:
        return render_template("index.html")


@app.route("/img/<path:path>", methods=["GET"])
def retrive_image(path):
    file =  "static" + request.path

    # Printing the path of the image that is being requested.
    # print(path)

    return send_file(file, mimetype="image/jpg")