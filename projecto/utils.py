import os
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

FORM_KEYS = {'name', 'value', 'end', 'currency', 'start', 'memo'}

def validate_form(form: dict):
    def _valid(key):
        if key not in form or form[key] == '':
            return False
        return True

    
    # print(form.keys())
    if set(form.keys()).difference(FORM_KEYS).__len__() > 0:
        for key in FORM_KEYS:
            if not _valid(key):
                return False
        return True
    else:
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
            IMAGE_DIR = app.config['UPLOAD_FOLDER']+f"/{project_id}"
            IMAGE_DIR_LNK = app.config['TEMPLATE_FOLDER']+f"/images/{project_id}"
            
            if not os.path.exists(IMAGE_DIR):
                
                os.makedirs(IMAGE_DIR)

            if not os.path.exists(IMAGE_DIR_LNK):
                os.makedirs(IMAGE_DIR_LNK)
                

            storage_path = os.path.abspath(IMAGE_DIR + "/" + filename)
            file.save(storage_path)

            os.symlink(f"{storage_path}", f"{IMAGE_DIR_LNK}/{filename}")

            images.append(f"images/{project_id}/{filename}")

    if images.__len__() > 0:
        links = str(images)
        return True, links 
    return False, "Failed"


def check_image_exists(link):
    if os.path.exists(link):
        return True
    return False


def remove_links(id, link):
    path = f"storage/{link.split('/', 1)[1]}"
    
    import shutil as base
    
    if check_image_exists(path):
        print(path)
        base.rmtree(path)
        path_lnk = f"templates/{link}"
        base.rmtree(path_lnk)
        return "DELETED", id, link
        # os.removedirs(path)
        