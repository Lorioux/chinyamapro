import asyncio


def match_hostname(hostname, port, root_path):
    if hostname.startswith((r"http://localhost", r"http://127")):
        return "{}:{}".format(hostname,port)
    else:
        return "{}/{}".format(hostname, root_path)


def run():
    from . import media_proxy
    from . import contacts_proxy
    from . import banner_proxy
    from . import service_proxy
    from . import testimonial_proxy
    _contact, _cntproc = asyncio.run(contacts_proxy.worker(5001))
    _media, _mdproc = asyncio.run(media_proxy.worker(5002))
    _banner, _banproc = asyncio.run(banner_proxy.worker(5003))
    _service, _svcproc = asyncio.run(service_proxy.worker(5004))
    _testimonial, _tstproc = asyncio.run(testimonial_proxy.worker(5005))



def processor(path:str, hostname):
    if  path.startswith((r"/media", r"/img", r"/css", r"/fonts", r"/inc", r"/js", r"/favicon.ico")):
        return match_hostname(hostname, 5002, 'media-proxy') + "/static/pages" + path

    if  path.startswith((r"/static/pages/media", r"/static/pages/img", r"/static/pages/css", r"/static/pages/fonts", r"/static/pages/inc", r"/static/pages/js")):
        return match_hostname(hostname, 5002, 'media-proxy') + path

    if path.endswith("html"):
        return match_hostname(hostname, 5002, 'media-proxy') + "/static/pages/" + path.rsplit("/", 1)[-1]

    if path.startswith((r"/contactinfo", r"/socialmedia/info", r"/SocialMedia", r"/contact/info", )):
        return match_hostname(hostname, 5001, 'contacts-proxy') + path

    if path.startswith((r"/core/capabilities/create", r"/core/desclaim/create")):
        return match_hostname(hostname, 5003, 'banners-proxy') + path

    if path.startswith((r"/service/packages", r"/service/portfolio", r"/service/portfolio")) :
        return match_hostname(hostname, 5004, 'services-proxy') + path

    if path.startswith((r"/testimonial/all", r"/testimonial/add")):
        return match_hostname(hostname, 5005, 'testimonial-proxy') + path