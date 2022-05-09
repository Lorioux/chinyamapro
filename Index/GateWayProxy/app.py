import asyncio

from flask import Flask, make_response, redirect, request
import requests

from . import media_proxy
from . import contacts_proxy
from . import banner_proxy
from . import service_proxy

from .routes_broke import processor

app  = Flask(__name__)


_contact, _cntproc = asyncio.run(contacts_proxy.worker(5001))
_media, _mdproc = asyncio.run(media_proxy.worker(5002))
_banner, _banproc = asyncio.run(banner_proxy.worker(5003))
_service, _svcproc = asyncio.run(service_proxy.worker(5004))


# @app.before_first_request
# def __launch__servers__():
    # global _contact, _cntproc, _media, _mdproc, _banner, _banproc

    # _contact, _cntproc = asyncio.run(contacts_proxy.worker(5001))
    # _media, _mdproc = asyncio.run(media_proxy.worker(5002))
    # _banner, _banproc = asyncio.run(banner_proxy.worker(5003))
    # _service, _svcproc = asyncio.run(service_proxy.worker(5004))

@app.route("/<path:path>", methods=["GET", "POST"])
def index(path):
    
    url = processor(request.path)

    if request.method == "GET":
        
        return redirect(url,)

    if request.method == "POST":
        return redirect(url, method=request.method, data=request.data)

    # return response


# @app.teardown_appcontext