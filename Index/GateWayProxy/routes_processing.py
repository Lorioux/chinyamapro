# import asyncio
from operator import or_, and_

def processor(path):
    if  path.startswith("/media") or path.startswith("/img") or path.startswith("/css") or path.startswith("/fonts") or path.startswith("/inc") or path.startswith("/js"):

        return "http://localhost:5002" + "/static" + path

    if path.startswith("/ContactInfo") or path.startswith("/SocialMediaInfo") or path.startswith("/SocialMedia/Info") or path.startswith("/Contact/Info"):
        return "http://localhost:5001" + path

    if or_(path.startswith("/Core/Service/Create"), path.startswith("/Core/Desclaim/Create")):
        return "http://localhost:5003" + path

    if or_(path.startswith("/Service/Packages"), path.startswith("/Service/Package/Create")):
        return "http://localhost:5004" + path