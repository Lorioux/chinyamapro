import uuid

from sqlalchemy import Column, String, Integer

from flask_sqlalchemy import declarative_base

Base = declarative_base()

class Projecto(Base):
    __tablename__ = "projecto"
    
    id = Column("Id", String(256), primary_key=True, default=str(uuid.uuid4))
    name  = Column("Name", String(55), nullable=False, default="Projecto")
    value = Column("Value", String(55), nullable=False, default="12.000.000.00")
    currency = Column("Moeda", String(3), nullable=False, default="MZN")
    start = Column("Inicio", String(15), nullable=False, default="01/12/2021")
    end   = Column("Fim", String(15), nullable=False, default="01/12/2021")
    addeb_by = Column("Usuario", String(55))

    def __init__(
        self, 
        id = None ,
        name = None, 
        value= None, 
        currency = None, 
        start = None, 
        end = None, 
        added_by = None
    ):
        self.id = id
        self.name = name 
        self.value = value 
        self.addeb_by = added_by
        self.currency = currency
        self.end = end
        self.start =  start
    
    def __repr__(self):
        return "{ %s : %s }" % (self.id, self.name)

class Descricao(Base):
    __tablename__ = "descricao"
    id = Column(String(256), primary_key=True)
    memo  = Column("Memo", String(258)) # json with projectId as key and content as memo

    def __init__(self, projectId, memo):
        self.id = projectId
        self.memo = memo

class Images(Base):
    __tablename__ = "images"
    id = Column(String(256), primary_key=True)
    link  = Column("Images", String(128)) # json with projectId as key and content path as value

    def __init__(self, projectId, link):
        self.id = projectId
        self.link = link