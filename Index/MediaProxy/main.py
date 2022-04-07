import functions_framework as fnf

_proxy = __import__('proxy')

@fnf.http
def proxy(request):
    credentials = _proxy.credentials
    print(credentials.token , end="\n")
    return {"status": 200, "message": "Done!"}