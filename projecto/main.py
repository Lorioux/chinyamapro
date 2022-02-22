from functools import wraps

from flask import (
    Flask, 
    jsonify, 
    request, 
    flash, 
    redirect, 
    url_for 
)



from .database import (
    _initialize, 
    _create_all, 
    database,
    _generate_uuid,
    _upload_images,
    Projecto,
    Descricao,
    Images,
    _insert,
    _list
)


from .utils import validate_form

def _handle_db_ops(app):
    global engine
    database.init_app(app)
    engine = database.get_engine()
    _initialize(engine)


def main(app: Flask):
    _handle_db_ops(app)


#-----------------------------------------------------------------------------------------------------------------------------
    @app.route('/')
    def index():
        identifier = _generate_uuid()
        return jsonify(identifier)


    @app.route("/registry/refresh", methods=['GET'])
    def refresh_registry():
        try:
            # _handle_db_ops(app)
            print(engine)
            _create_all(engine)
        except RuntimeError as identifier:
            print(identifier.args)
        return jsonify("Database bootstraped!")


    @app.route("/create", methods=['GET', 'POST'])
    def create(): 
        """Create a new project
        Args:
            request (Resquest): request data
        Returns:
            message (Response): Message contains response status and created objects identifier
        """

        if request.method == 'GET':
            
            file = "".join(open("./views/create.html").readlines())

            return file 
        # validate the form 
        FORM = request.form
        IMAGES = request.files
        if not validate_form(FORM):
            flash("Invalid information provided")
            return jsonify("Failed! Invalid information")
        
        if IMAGES.__len__() <= 0:
            flash('Not image provided')
            return jsonify("Failed! No image provided.")

        ID = str(_generate_uuid())
        print(ID)
        PROJECT = Projecto(
            id= ID,
            name=FORM['name'], 
                value=FORM['value'], 
                    end=FORM['end'], 
                        start=FORM['start'], 
                            currency=FORM['currency'])

        DESCRICAO = Descricao(projectId=PROJECT.id, memo=FORM['desc'] )       
        
        # print(PROJECT)
        created, result = _insert(PROJECT)
        
        if created:
            _,_ = _insert(DESCRICAO)
            # Save images if projecto is created successful
        
            UPLOADED, LINKS = _upload_images(app, PROJECT.id, IMAGES)
            if UPLOADED:
                registed, _ = _insert(Images(projectId=PROJECT.id,  link=LINKS))
        else:
            return jsonify("Project failed to create. %s") %result

            

        # for file in request.files:
        #     print(file, end="\n")
        
        return jsonify(f"Done")
        

    @app.route('/projecto/<int:id>', methods=['GET'])
    def read():
        pass

    @app.route('/projecto/<int:id>', methods=['PUT'])
    def update():
        pass 

    @app.route('/projecto/<int:id>', methods=['GET'])
    def delete():
        pass 

    @app.route('/all', methods=['GET'])
    def list():
        # get all projectos
        # projectos = _list(Projecto)

        projecto = _list(Projecto)

        print(projecto)

        return "Done!"
        pass