import os
import base64

class Config(object):
    JSON_SORT_KEYS = True
    SECRET_KEY = base64.b64encode(os.urandom(64)).decode('utf-8')
    JSONIFY_PRETTYPRINT_REGULAR = True


class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///data/projecto.db?check_same_thread=False'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    UPLOAD_FOLDER = "storage"
    TEMPLATE_FOLDER = "templates"