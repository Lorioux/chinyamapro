import os
import json
import click

from werkzeug.utils import secure_filename

from .models import Base


#-------------COMMANDS--------------
@click.command("initialize")
@click.argument("table")
def initilize(table: str = "all"):
    if table == 'all':
        init_db()

def init_db():
    Base.metadata.create_all(bind="__all__")


#------------HELPERS---------------
ALLOWED_EXTENSIONS = {'txt', 'png', 'jpeg', 'jpg', 'pdf'}

FORM_KEYS = {'name', 'value', 'end', 'currency', 'start', 'memo', 'country', 'state'}

def validate_form(form: dict):
    # def _valid(key):
    #     if key not in form or form[key] == '':
    #         return False
    #     return True

    
    
    
    if set(form.keys()).difference(FORM_KEYS).__len__() == 0:
        # print(form.keys())
        return True
    else:
        # print(FORM_KEYS)
        return False


def check_allowed_file(filename: str):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def upload_images(app, project_id, files):
    images = []
    for _, file in files:
        # print(file)
        if file.filename == '':
            return False, 'Not selected correct file type!'
        if check_allowed_file(file.filename):
            
            filename = secure_filename(file.filename)
            IMAGE_DIR = app.config['UPLOAD_FOLDER']+f"/media/{project_id}"
            IMAGE_DIR_LNK = app.config['TEMPLATE_FOLDER']+f"/media/{project_id}"
            
            if not os.path.exists(IMAGE_DIR):
                
                os.makedirs(IMAGE_DIR)

            if not os.path.exists(IMAGE_DIR_LNK):
                os.makedirs(IMAGE_DIR_LNK)
                

            storage_path = os.path.abspath(IMAGE_DIR + "/" + filename)
            file.save(storage_path)

            os.symlink(f"{storage_path}", f"{IMAGE_DIR_LNK}/{filename}")

            images.append(f"media/{project_id}/{filename}")

    if images.__len__() > 0:
        links = str(images)
        return True, links 
    return False, "Failed"


def check_image_exists(link):
    if os.path.exists(link):
        return True
    return False


def remove_links(id="", link=""):
    path = f"storage/{link}"
    path_lnk = f"templates/{link}"
    parent = os.path.dirname(path)

    import shutil as base
    
    if check_image_exists(path):
        
        os.remove(path_lnk)
        os.remove(path)
        
        if os.listdir(parent) == []:
            base.rmtree(parent)
            base.rmtree(os.path.dirname(path_lnk))

        return "DELETED", id, link
        

class JSONEncoder(json.JSONEncoder):
    def __init__(self, cls):
        super(JSONEncoder, self).__init__()
        self.cls = cls
    def default(self, o):
        if isinstance(o, self.cls):
            return o.__repr__()
        return json.JSONEncoder.default(self, o)