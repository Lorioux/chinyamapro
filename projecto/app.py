from flask import Flask

from .settings import TestingConfig

try:
    from .main import main
except ImportError:
    from main import main

def make_app(testing: bool = False):
    global app
    app = Flask(__name__)
    if testing:
        app.config.from_mapping({})
    else:
        app.config.from_object(TestingConfig)

    with app.app_context():
        main(app)
        pass    
    # app.cli.add_command(initilize)
    #------------------------------------------------------------------------------------
    return app



