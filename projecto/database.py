import os

from sqlalchemy import (
    select, 
    insert, 
    delete, 
    update,
)

from sqlalchemy.orm import sessionmaker, scoped_session, Query

from flask_sqlalchemy import SQLAlchemy

from werkzeug.utils import secure_filename

from .models import *

from .utils import _check_allowed_file

database = SQLAlchemy()
engine = None

# session : SessionBase = Session()

def _initialize(_engine):
    global engine, Session
    engine = _engine
    Session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))
    # Session.configure(bind=engine)
    Base.query = Session.query_property()

    

def _create_all(_engine):
    # _initialize(_engine)
    Base.metadata.create_all(bind=_engine)
    # print(session)


def _generate_uuid():
    import uuid
    return uuid.uuid4()


def _insert(cls) -> tuple:
    """Insert values into tables"""
    session = Session()
    if isinstance(cls, Projecto) or isinstance(cls, Descricao) or isinstance(cls, Images):
        result = session.bulk_save_objects([cls])
        return True, result
    return False, "Failed"


def _update(cls, values):
    session = Session()
    session.query(cls).update(values)


def _list(cls: Base):
    return Query(cls, Session()).all()
        
def _upload_images(app, project_id, files):
    images = []
    for _, file in files.items():
        # print(file)
        if file.filename == '':
            return False, 'Not selected correct file type!'
        if _check_allowed_file(file.filename):
            
            filename = secure_filename(file.filename)
            os.mkdir(app.config['UPLOAD_FOLDER']+f"/{project_id}")
            link = app.config['UPLOAD_FOLDER']+f"/{project_id}/" + filename
            file.save(link)
            images.append(link)
    if images.__len__() > 0:
        links = str(images).encode('utf-8')
        return True, links 
    return False, "Failed"
