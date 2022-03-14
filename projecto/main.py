import json
import ast

# from functools import wraps

from . import Flask, render_template, jsonify


from .database import database, initialize, get_session, create_all

# from .utils import validate_form, _upload_images

def _handle_db_ops(app):
    global engine, session
    database.init_app(app)
    engine = database.get_engine()
    initialize(engine)
    session = get_session()

def get_app() -> Flask:
    return APP

def main(app: Flask):
    global APP 
    APP = app
    _handle_db_ops(app)

    # @app.route("/create", methods=['GET', 'POST'])
    from .controllers.routes import ( 
        create_projecto, 
        fetch_projectos, 
        fetch_images, 
        fetch_other_files,
        delete_projecto
    )
    

    # @app.route('/projecto/readOne/<int:id>', methods=['GET'])
    # # def read(id):
    # #     pass

    # @app.route('/projecto/upDate', methods=['PUT'])
    # # def update():
    # #     pass 

    # @app.route('/projecto/deleteOne', methods=['GET'])
    # # def delete():
    # #     pass 

    
    # @app.route('/images/<id>/<name>/delete', methods=['DELETE'])
    # 
    


#-----ROUTES----------------------------------------------------------------------------------------------------------
    @app.route('/')
    def index():
        _projectos = fetch_projectos()
        return render_template("index.html", projectos=_projectos, lista=True)


    @app.route("/registry/refresh", methods=['GET'])
    def refresh_registry():
        try:
            # _handle_db_ops(app)
            # print(engine)
            create_all(engine)
        except RuntimeError as e:
            print(e.args)
        return jsonify("Database bootstraped! %s" % (engine))