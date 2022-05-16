# import asyncio

def processor(path:str):
    if  path.startswith((r"/media", r"/img", r"/css", r"/fonts", r"/inc", r"/js")):
        return "http://localhost:5002" + "/static/pages" + path

    if  path.startswith((r"/static/pages/media", r"/static/pages/img", r"/static/pages/css", r"/static/pages/fonts", r"/static/pages/inc", r"/static/pages/js")):
        return "http://localhost:5002" + path

    if path.endswith("html"):
        return "http://localhost:5002" + "/static/pages/" + path.rsplit("/", 1)[-1]

    if path.startswith((r"/contactinfo", r"/socialmedia/info", r"/SocialMedia", r"/contact/info", )):
        return "http://localhost:5001" + path

    if path.startswith((r"/core/capabilities/create", r"/core/desclaim/create")):
        return "http://localhost:5003" + path

    if path.startswith((r"/service/packages", r"/service/portfolio", r"/service/portfolio")) :
        return "http://localhost:5004" + path


    if path.startswith(r"/testimonial"):
        return "http://localhost:5005" + path