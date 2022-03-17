import uuid
import ast

from sqlalchemy import Column, String
from sqlalchemy.orm import Query

from flask_sqlalchemy import declarative_base

# from .utils import remove_links
# from . import remove_links

Base = declarative_base()

class Projecto(Base):
    __tablename__ = "projecto"
    __table_args__ = {'extend_existing': True}
    
    id = Column("Id", String(256), primary_key=True, default=str(uuid.uuid4))
    name  = Column("Name", String(55), nullable=False, default="Projecto")
    value = Column("Value", String(55), nullable=False, default="12.000.000.00")
    currency = Column("Currency", String(3), nullable=False, default="MZN")
    country = Column("Country", String(55), nullable=False, default="Mozambique")
    state = Column("Province", String(55), nullable=False, default="Tete")
    start = Column("Start", String(15), nullable=False, default="01/12/2021")
    end   = Column("End", String(15), nullable=False, default="31/12/2021")
    addeb_by = Column("Usuario", String(55))

    _memo = ""
    _images = ""

    def __init__(
        self, 
        id = None ,
        name = None, 
        value= None, 
        currency = None, 
        start = None, 
        end = None, 
        country= None,
        state=None,
        added_by = None
    ):
        self.id = id
        self.name = name 
        self.value = value 
        self.addeb_by = added_by
        self.currency = currency
        self.end = end
        self.start =  start

        self.country = country
        self.state = state

        self.__session = ""
        self._memo = ""
        self._images = []
        # self.__dict__ = {}
    
    def __repr__(self):
        return { "id" : self.id, "name" : self.name, "value": self.value, "currency": self.currency, 
                 "start": self.start, "country": self.country, "city": self.state, "end": self.end, "memo": self.memo, "images": self.images 
                }

    @property
    def session(self):
        return self.__session

    @property
    def memo (self):
        return self._memo

    
    @property
    def images(self):
        return self._images



    @session.setter
    def session(self, val):
        self.__session = val

    @memo.setter
    def memo (self, val):
        self._memo = val 

    @images.setter
    def images(self, val):
        self._images = val


    def create(self):

        try:
            self.session.add(self)
            self.session.commit()
            return True, self
        except Exception as e:
            self.session.rollback()
            print(e)
            return False, self

    @classmethod
    def read(cls, id):
        return cls.query.filter(cls.id==id).first()

    @classmethod
    def all(cls):
        projects = cls.query.all()
        return projects 

    def update(self):
        try:
            pass
        except:
            pass

    @classmethod
    def delete(cls, id, session):
        entity = cls.query.get(id)
        try:
            session.delete(entity)
            session.commit()
            return True, entity
        except:
            session.rollback()

    

class Details(Base):
    __tablename__ = "descricao"
    __table_args__ = {'extend_existing': True}

    id = Column(String(256), primary_key=True)
    memo  = Column("Memo", String(258)) # json with projectId as key and content as memo

    def __init__(self, id, memo):
        self.id = id
        self.memo = memo

    def create(self):
        try:
            self.session.add(self)
            self.session.commit()
            
        except:
            self.session.rollback()

    @classmethod
    def read(cls, id):
        return cls.query.filter(cls.id == id).first()

    
    @classmethod
    def delete(cls, id, session):
        entity = cls.query.get(id)
        try:
            session.delete(entity)
            session.commit()
        except:
            session.rollback()

    @classmethod
    def read_all(cls):
        return cls.query.all()

    @classmethod
    def update(cls, id, memo):
        pass
        

class ImageLink(Base):
    __tablename__ = "images"
    __table_args__ = {'extend_existing': True}

    id = Column(String(256), primary_key=True)
    links  = Column("Images", String(512)) # json with projectId as key and content path as value

    def __init__(self, id, links: any):
        self.id = id
        self.links = links

    
    def __repr__(self):
        return '{"id":%s, "links":%s}' % (self.id, self.links)

    def create(self):
        try:
            self.session.add(self)
            self.session.commit()
        except BaseException as e:
            print(e)
            self.session.rollback()

    @classmethod
    def read(cls, id):
        return cls.query.filter(cls.id==id).first()


    @classmethod
    def update(cls, id, links):
        try:
            cls.id = id
            cls.links = links
            Query(cls, cls.session).\
                update({"id":id, "links":links}, synchronize_session="evaluate") 
        except:
            print('Error ImageLink Update')

    @classmethod
    def delete(cls, id, session):
        
        entity = cls.query.filter(cls.id == id).one()
        try:
            links = ast.literal_eval(entity.links)
            session.delete(entity)
            session.commit()
            return True, links
        except Exception as e:
            session.rollback()
            return False, None
    

    @classmethod
    def remove_link(cls, id, link):

        images = cls.query.filter(cls.id == id).first()
        links = images.links
        if links:
            links:list = ast.literal_eval(links)
            links.remove(link)
            remove_links(id, link)
            cls.update(id, links)

        