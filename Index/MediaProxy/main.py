import functions_framework as fnf
from flask import ( current_app as appproxy, redirect, make_response, render_template)

from flask import request, Response

_proxy = __import__('proxy')
app = __import__('app')


appproxy.register_blueprint(_proxy.setupproxy)


# @appproxy.before_request
# def __relaunch_server__():
    
#     if _proxy.WORKER is None:
#         _proxy._launch_server()

@appproxy.after_request
async def __dispatch__(response: Response):

    if response.get_data(as_text=True) == 'GET':
        _proxy.RESPONSE = _proxy.requests.get("http://{}:{}{}".format(_proxy.HOST, _proxy.PORT, _proxy.REQUEST.path))

    if response.get_data(as_text=True) == 'POST':
        _proxy.RESPONSE = _proxy.requests.post(
                                "http://{}:{}{}".format(_proxy.HOST, _proxy.PORT, _proxy.REQUEST.path),
                                data = _proxy.REQUEST.data,
                                files= _proxy.REQUEST.files,
                                headers={ "Content-Type":"multipart/form-data"} )


    template = "{}".format(_proxy.RESPONSE.content.decode("ascii"))
    
    _response = make_response()
    _response.set_data(template)

    # await __kill_server__(_response)

    return _response


# @appproxy.after_request
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


