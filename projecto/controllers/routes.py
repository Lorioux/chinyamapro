from projecto.utils import JSONEncoder, remove_links
from . import request, render_template, jsonify, redirect, url_for, flash

from . import Projecto, ImageLink, Details

from . import validate_form, upload_images

from . import get_session, generate_uuid

from . import Flask, get_app

from . import ast, json

from . import request, send_file, render_template

app: Flask = get_app()

@app.route("/createProjecto", methods=['GET', 'POST'])
def create_projecto(): 

    if request.method == 'GET':
        return render_template("index.html", novo=True) 
    
    # validate the form 
    FORM = request.form
    IMAGES = request.files
    if not validate_form(FORM):
        return jsonify("Failed! Invalid information")
    
    if IMAGES.__len__() <= 0:
        return jsonify("Failed! No image provided.")

    ID = str(generate_uuid())
    PROJECT = Projecto(
        id= ID,
        name=FORM['name'], 
        value=FORM['value'], 
        end=FORM['end'], 
        start=FORM['start'], 
        currency=FORM['currency'],
        country=FORM["country"],
        state=FORM["state"],
    )

    PROJECT.session = get_session()
    created, result = PROJECT.create()
    

    DESCRICAO = Details(id=ID, memo=FORM['memo'] )
    DESCRICAO.session = get_session()  
    

    if created:
        DESCRICAO.create()
        # Save images if projecto is created successful
        UPLOADED, LINKS = upload_images(app, PROJECT.id, IMAGES.items(multi=True))
        
        if UPLOADED:
            # print(LINKS)
            Links = ImageLink(id=PROJECT.id,  links=LINKS)
            Links.session = get_session()
            Links.create()

        # print(IMAGES)

    else:
        return jsonify("Project failed to create")

        

    # for file in IMAGES.items(multi=True):
    #     print(file, end="\n")
    
    return redirect(url_for("index"))


@app.route("/deleteProjecto/<string:id>", methods=['GET'])
def delete_projecto(id):
    status, _ = Projecto.delete(id, get_session())
    if status:
        print("Projecto deleted!")
        Details.delete(id, get_session())
        status, links = ImageLink.delete(id, get_session())
        if status:
            for lnk in links[0:]:
                remove_links(id, lnk)
        
        return redirect(url_for('index'))
        # return jsonify("Done!")

    else:
        return redirect(url_for('index'))



@app.route('/allProjectos', methods=['GET'])
def fetch_projectos():
    
    projectos = Projecto.all()

    for pro in projectos:

        descricao = Details.read(id=pro.id)
        
        image = ImageLink.read(id=pro.id)
        
        if not isinstance(descricao, type(None)):
            pro.memo = descricao.memo
        if not isinstance(image, type(None)):
            try:
                pro.images = ast.literal_eval(image.links)
            except:
                print(image.links)

    # jsonify(str(projectos))
    # images = ast.literal_eval(projectos[-1].links)
    if request.path == "/":
        return projectos

    projectos = JSONEncoder(Projecto).encode(projectos)
    

    return   jsonify(ast.literal_eval(projectos))


@app.route('/media/<id>/<name>', methods=["GET"])
def fetch_images(id, name):
    path = request.path
    
    return send_file("templates/{}".format(path), mimetype="image/png" )


@app.route('/templates/js/<path:path>', methods=["GET"])
@app.route('/templates/css/<path:path>', methods=["GET"])
def fetch_other_files(path):
    path = request.path
    
    # print(path)
    return send_file(path.split('/', 1)[1] )

