import functions_framework as fnf
from  functions_framework import flask

_proxy = __import__('proxy')
app = __import__('app')

_proxy.THIS = flask.current_app

async def launch_server():

    APP, WORKER = await app.worker()

    await _proxy.asyncio.sleep(1)
    pass

_proxy.asyncio.run(launch_server())

@_proxy.THIS.after_request
async def __dispatch__(response: flask.Response):
    REQUEST = flask.request
    path = REQUEST.path

    if REQUEST.method == 'GET':
        _proxy.RESPONSE = _proxy.requests.get("http://{}:{}{}".format(_proxy.HOST, _proxy.PORT, path))

    if REQUEST.method == 'POST':
        
        _proxy.RESPONSE = _proxy.requests.post(
                            url ="http://{}:{}{}".format(_proxy.HOST, _proxy.PORT, path),
                            data = REQUEST.form,
                            files= REQUEST.files.items(multi=True),
                            # headers={ "Content-Type":"multipart/form-data"} 
                        )


    # template = "{}".format(_proxy.RESPONSE.content.decode("ascii"))
    
    
    response.set_data(_proxy.RESPONSE.content)

    

    return response


@fnf.http
def proxy(request):
    return {'status': 200}


