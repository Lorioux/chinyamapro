import asyncio
import sys 
import os
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
    
    conn = url3.connection_from_url("http://{}:{}".format(HOST, PORT))

    if REQUEST.method == 'GET':
        RESPONSE = conn.request("GET", path)

    if REQUEST.method == 'POST':
        RESPONSE = conn.request("POST", path, body=REQUEST.get_data(), headers = REQUEST.headers )

    response.set_data(RESPONSE.data)
    for k, v in RESPONSE.headers.items():
        response.headers[k] = v
    
    return response

@fnf.http
def proxy(request):

    return flask.jsonify({'status': 200, "message": "Testimonial"})