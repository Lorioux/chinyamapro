import click

from .models import Base

ALLOWED_EXTENSIONS = {'txt', 'png', 'jpeg', 'jpg', 'pdf'}

FORM_KEYS = {'name', 'value', 'end', 'currency', 'start', 'desc'}

@click.command("initialize")
@click.argument("table")
def initilize(table: str = "all"):
    if table == 'all':
        init_db()

def init_db():
    Base.metadata.create_all(bind="__all__")


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


def _check_allowed_file(filename: str):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS