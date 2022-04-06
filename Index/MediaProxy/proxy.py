import functions_framework as fnf 

@fnf.http 
def proxy(request):

    return {"status": 200, "message": "Done!"}