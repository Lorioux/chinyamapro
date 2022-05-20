import functions_framework as fnf
from  functions_framework import flask

middleware = __import__('middleware')
app = __import__('app')

middleware.THIS = flask.current_app

async def launch_server():

    APP, WORKER = await app.worker()

    await middleware.asyncio.sleep(1)
    pass

middleware.asyncio.run(launch_server())

@middleware.THIS.after_request
async def __dispatch__(response: flask.Response):
    REQUEST = flask.request
    path = REQUEST.path

    if REQUEST.method == 'GET':
        RESPONSE = middleware.requests.get("http://{}:{}{}".format(middleware.HOST, middleware.PORT, path))

    if REQUEST.method == 'POST':
        
        RESPONSE = middleware.requests.post(
                            url ="http://{}:{}{}".format(middleware.HOST, middleware.PORT, path),
                            data = REQUEST.form,
                            files= REQUEST.files.items(multi=True),
                            # headers={ "Content-Type":"multipart/form-data"} 
                        )


    # template = "{}".format(_proxy.RESPONSE.content.decode("ascii"))

    response.set_data(RESPONSE.content)
    return response


@fnf.http
def proxy(request):
    return {'status': 200}


