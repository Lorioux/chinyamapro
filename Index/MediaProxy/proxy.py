import os
import glob
from threading import Thread
import json

from google.oauth2 import service_account
# from googleapiclient import discovery
from google.cloud.storage import Client

SA_KEY = json.loads(os.environ.get("MEDIA_STOKE_KEY", "None"))

credentials = service_account.Credentials.from_service_account_info(SA_KEY)         

storage = Client('ccoe-chin-solutions', credentials)



def create_media(entity: str, source: any, multiple: bool, private: bool):
    global media
    stoke = storage.get_bucket('media-chin-00')

    media = stoke.blob("proxy{}".format(entity))

    if multiple:
        Thread(upload_from_directory( source, stoke.name, media.name, private)).start()

    if multiple:
        Thread(upload_from_file( source, stoke.name, media.name, private)).start()

    if not multiple:
        upload_from_file(source, stoke.name, media.name, private)

    if not private:
        media.make_public()

def create_storage():
    global mediastoke
    mediastoke = storage.create_bucket('media-chin-00', location='us-central1')

    # print(mediastoke.name)


def upload_from_directory(directory_path: str, dest_bucket_name: str, dest_blob_name: str, private: bool):
    rel_paths = glob.glob(directory_path + '/**', recursive=True)
    bucket = storage.get_bucket(dest_bucket_name)
    
    for local_file in rel_paths: 
        remote_path = f'{dest_blob_name}/{"/".join(local_file.split(os.sep)[1:])}'
        if os.path.isfile(local_file):
            blob = bucket.blob(remote_path)
            blob.upload_from_filename(local_file)
            if not private:
                blob.make_public()
                print(blob.public_url)


def upload_from_file(file: object, dest_bucket_name: str, dest_blob_name: str, private: bool):

    bucket = storage.get_bucket(dest_bucket_name)
    file_blob = bucket.blob(dest_blob_name)

    file_blob.upload_from_file(file)
    if not private:
        file_blob.make_public()
        print(file_blob.public_url)
    

def save_outro_media(request):
    name = request.path
    files = request.files
    source = files['photo']
    print(source.__len__())
    # multiple = len(files.items) > 1
    # create_media(name, source, multiple, False)
    