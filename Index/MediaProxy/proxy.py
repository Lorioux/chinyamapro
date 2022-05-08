import os
import glob
import asyncio
import json 
import re
import requests
from threading import Thread

import requests

from werkzeug.utils import secure_filename
from flask import current_app, redirect, url_for, blueprints

import google.cloud.functions as fnc
import google.cloud.storage as stg


from google.oauth2 import service_account



SERVICE_ACC_KEY = json.loads(os.environ.get("SERVICE_ACC_KEY", "None"))


credentials = service_account.Credentials.from_service_account_info(SERVICE_ACC_KEY)

os.environ["FLASK_ENV"] = "development"

REQUEST = None
RESPONSE = {"message": "Completed successful"}, 200

APP = None
WORKER = None
THIS = None
HOST = "127.0.0.1"
PORT = 8081
URLS = {}

# --------------------------STORAGE OPERATIONS----------------------------------------------------------
storage = stg.Client('ccoe-chin-solutions', credentials)

def create_media(entity: str, source: any, source_type: str, multiple: bool, private: bool):
    global media
    stoke = storage.get_bucket('media-chin-00')

    media = stoke.blob("proxy{}".format(entity))

    if multiple and source_type == 'directory':
        Thread(upload_from_directory( source, stoke.name, media.name, private)).start()

    if multiple and source_type == 'file':
        Thread(upload_from_file( source, stoke.name, media.name, private)).start()

    if not multiple:
        upload_from_file(source, stoke.name, media.name, private)

    # if not private:
    #     media.make_public()


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
    global URLS
    bucket = storage.get_bucket(dest_bucket_name)
    
    URLS = {}
    index = 0
    for f in file[0:]:
    
        filename = secure_filename(f.filename)
        filepath = dest_blob_name
        if not dest_blob_name.__contains__(filename):
            filepath =  dest_blob_name + "/{}".format(filename)
        
        file_blob = bucket.blob(filepath)
        file_blob.upload_from_file(f)
    
        if not private:
            file_blob.make_public()
            URLS[index] =  file_blob.public_url
            index += 1

    print(URLS)


def save_outro_media(entity, files):
    name = entity
    files = files

    print(files)
    multiple = len(files.getlist('photo')) > 1
    create_media(name, files.items(multi=True), "file", multiple, False)
    
    # update_members_photos_URLS(URLS)
    


#-----------------FUNCTIONS OPERATIONS----------------------------------------------------
# functions = fnc.CloudFunctionsServiceClient(credentials=credentials)

# def update_members_photos_URLS(url):
#     # member_proxy = fnc.CloudFunction(name="projects/ccoe-chin-solutions/locations/us-central1/functions/mediaproxy")
#     reql = fnc.ListFunctionsRequest(parent="projects/ccoe-chin-solutions/locations/-")

#     resl = functions.list_functions(reql)

#     # print(resl.functions)

#     # req = fnc.GetFunctionRequest(name="projects/ccoe-chin-solutions/locations/us-central1/functions/mediaproxy")
#     # proxy = functions.get_function(request=req)
#     # print(proxy)
#     # proxy.environment_variables["PHOTOS_URLS"] = URLS 
#     # operation = functions.update_function({"function":proxy})
    
#     # print(operation.result())
#     return "UPDATE"
#     pass




#-----------------SERVER OPS--------------------------------------------------------------
# setupproxy = blueprints.Blueprint(__name__, 'setupproxy')

# @setupproxy.before_app_first_request

# requests.post()