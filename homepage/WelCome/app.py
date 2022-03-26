
from this import d
from flask import Flask, redirect, request

from WelCome.utils import file_async_reader
from WelCome.utils import upload_image 


app = Flask(__name__)  
# app.config["SERVER_NAME"] = "localhost:5002"
# app.config["SERVER_PORT"] = 5002
app.config["UPLOAD_PATH"] = "static"

offersfile = "./data/ServiceOffers.json"
coreservice = "./data/CoreServices.json"

@app.route("/Core/Service/Create", methods=["POST"])
def create_service():

    form = request.form
    file = request.files['imagelnk']

    for k, v in form.items():
        print("%s %s" % (k, v))

    data = file_async_reader(coreservice)

    if not data:
        data = {}
    
    with open(coreservice, "w+") as f:
        image_path = upload_image(file, form['title'])
        for k, v in form.items():
            data[k] = { k: v }
        data[k]['imagelnk'] = image_path

        f.write(str(data))

    return redirect("http://localhost:3000/EditX")

if __name__ == "__main__":
    app.run(debug=True)