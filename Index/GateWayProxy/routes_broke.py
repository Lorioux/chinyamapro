# import asyncio

def processor(path:str):
    if  path.startswith((r"/media", r"/img", r"/css", r"/fonts", r"/inc", r"/js")):

        return "http://localhost:5002" + "/static" + path

    if path.startswith((r"/ContactInfo", r"/SocialMediaInfo", r"/SocialMedia/Info", r"/Contact/Info", )):
        return "http://localhost:5001" + path

    if path.startswith((r"/Core/Service/Create", r"/Core/Desclaim/Create")):
        return "http://localhost:5003" + path

    if path.startswith((r"/Service/Packages", r"/Service/Package/Create", r"/Service/Portfolio")) :
        return "http://localhost:5004" + path