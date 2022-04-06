import os

from flask import current_app as app
from werkzeug.utils import secure_filename



def upload_image(file, id) :

    if file.filename == "" :
        return None

    filename = secure_filename(file.filename)

    with app.app_context():
        
        file_path = os.path.join(app.config["UPLOAD_PATH"], "media", id, filename)
        # os.makedirs(file_path, exist_ok=True, mode=7777)
    
        # file.save(file_path)
    
    return file_path
