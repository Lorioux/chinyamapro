import functions_framework as fnf
from flask import ( current_app, redirect, make_response, render_template)

from flask import request, Response

_proxy = __import__('proxy')
app = __import__('app')

_proxy.THIS = current_app

async def launch_server():

    APP, WORKER = await app.worker(_proxy.PORT)

    await _proxy.asyncio.sleep(1)
    pass

_proxy.asyncio.run(launch_server())

# THIS.register_blueprint(_proxy.setupproxy)


# @THIS.before_request
# def __relaunch_server__():
    
#     if _proxy.WORKER is None:
#         _proxy._launch_server()

@_proxy.THIS.after_request
async def __dispatch__(response: Response):

    path = _proxy.REQUEST.path

    if path.__contains__("/media-proxy"):
        path = path.split("/", 2)[2]

    if response.get_data(as_text=True) == 'GET':
        _proxy.RESPONSE = _proxy.requests.get("http://{}:{}{}".format(_proxy.HOST, _proxy.PORT, path))

    if response.get_data(as_text=True) == 'POST':
        
        _proxy.RESPONSE = _proxy.requests.post(
                                url ="http://{}:{}{}".format(_proxy.HOST, _proxy.PORT, path),
                                data = _proxy.REQUEST.form,
                                files= _proxy.REQUEST.files.items(multi=True),
                                # headers={ "Content-Type":"multipart/form-data"} 
                            )


    template = "{}".format(_proxy.RESPONSE.content.decode("ascii"))
    
    _response = make_response()
    _response.set_data(template)

    # await __kill_server__(_response)

    return _response


# @THIS.after_request
# async def __kill_server__(response):
#     if response:
#         print("KILLING...")
#         await _proxy.asyncio.sleep(1)
#         _proxy.WORKER.terminate()
#         _proxy.WORKER = None


@fnf.http
def proxy(request):
    _proxy.REQUEST = request
    return request.method


