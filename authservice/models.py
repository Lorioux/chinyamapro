from sqlalchemy import Column, String
from sqlalchemy import declarative_base

Basee = declarative_base()


class Identity(Base):
    __tablename__ = "identities"
    __table_args__ = {"extend_existing": True }

    username = Column(String(55), primary_key=True)
    passphrase = Column(String(55), nullable=False, default="123456789")

    def __init__(self, username, passphrase):
        self.username = username
        self.passphrase = passphrase