import os

from sqlalchemy import (
    select, 
    insert, 
    delete, 
    update,
)

from sqlalchemy.orm import sessionmaker, scoped_session, Query

from flask_sqlalchemy import SQLAlchemy

from .models import *


database = SQLAlchemy()
engine = None

# session : SessionBase = Session()

def initialize(_engine):
    global engine, Session
    engine = _engine
    Session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))
    # Session.configure(bind=engine)
    Base.query = Session.query_property()

    

def create_all(_engine):
    # _initialize(_engine)
    Base.metadata.create_all(bind=_engine)
    # print(session)


def generate_uuid():
    import uuid
    return uuid.uuid4()


def get_session():
    return Session()
