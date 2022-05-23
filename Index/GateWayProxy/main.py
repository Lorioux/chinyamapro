import asyncio
import sys 
import os
import requests
import urllib3 as url3

from functions_framework import flask 

import functions_framework as fnf 

BASEDIR = os.path.dirname(__file__)
sys.path.insert(0, BASEDIR)


app = __import__( "app" )
asyncio.run(app.worker())


HOST="127.0.0.1"
PORT=8080
REQUEST = flask.request
PROXY_APP = flask.current_app
@PROXY_APP.after_request
async def __dispatch__(response: flask.Response):
    
    path = REQUEST.path

    if REQUEST.method == 'GET':
        RESPONSE = requests.get(
            url="http://{}:{}{}".format(HOST, PORT, path),
            allow_redirects=True) #, headers=REQUEST.headers.copy()

    if REQUEST.method == 'POST':
        RESPONSE = requests.post(
                    url="http://{}:{}{}".format(HOST, PORT, path),
                    data=REQUEST.get_data(), 
                    files=REQUEST.files.items(multi=True),
                    allow_redirects=True) #
    
    response.set_data(RESPONSE.content)
    response.headers["Access-Control-Allow-Origin"] = "*"
    # for k, v in RESPONSE.headers.items():
    #     response.headers[k] = v
    
    return response


@fnf.http
def proxy(request):
    return flask.jsonify({'status': 200, "message": "Gateway"})