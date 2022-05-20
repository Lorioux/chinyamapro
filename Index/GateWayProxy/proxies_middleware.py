import asyncio
import sys

service_name_port_map = {
    "contacts-proxy": {
        "port": 5001,
        "package": "ContactProxy",
    },
    "media-proxy": {
        "port": 5002,
        "package": "MediaProxy",
    },
    "banners-proxy": {
        "port": 5003,
        "package": "BannerProxy",
    },
    "services-proxy": {
        "port": 5004,
        "package": "ServiceProxy",
    },
    "testimonials-proxy": {
        "port": 5005,
        "package": "TestimonialProxy",
    },
    "teams-proxy": {
        "port": 5006,
        "package": "TeamProxy",
    },
    "disclaims-proxy": {
        "port": 5007,
        "package": "DisclaimProxy",
    },
    "projects-proxy": {
        "port": 5008,
        "package": "ProjectProxy",
    },
    "blogs-proxy": {
        "port": 5009,
        "package": "BlogProxy",
    },
    "mails-proxy": {
        "port": 5010,
        "package": "MailProxy",
    },
}
def match_hostname(hostname, port, root_path):
    if hostname.startswith((r"http://localhost", r"http://127")):
        return "{}:{}".format(hostname,port)
    else:
        return "{}/{}".format(hostname, root_path)


async def __launch__(_proxy_name=None, _proxy_port=None):
    if _proxy_name is None:
        for s, c in service_name_port_map.items():
            service = service_name_port_map[s]
            _proxy_name = 'app'
            _proxy_port = service['port']
            
            package = service['package']
            sys.path.insert(0,'..')
            # print(package)
            proxy = __import__("{}.{}".format(package,_proxy_name), fromlist=[package])
            await proxy.worker(_proxy_port)
            # await asyncio.sleep(1)
    else:
        proxy = __import__(_proxy_name)
        asyncio.run(proxy.worker(_proxy_port))



def route(path:str, hostname):
    if  path.startswith((r"/media", r"/img", r"/css", r"/fonts", r"/inc", r"/js", r"/favicon.ico")):
        service = service_name_port_map['media-proxy']
        return match_hostname(hostname, service['port'], 'media-proxy') + "/static/pages" + path
    elif  path.startswith((r"/static/pages/")):
        service = service_name_port_map['media-proxy']
        return match_hostname(hostname, service['port'], 'media-proxy') + path
    elif path.endswith(r"html"):
        service = service_name_port_map['media-proxy']
        return match_hostname(hostname, service['port'], 'media-proxy') + "/static/pages/" + path.rsplit("/", 1)[-1]

    if path.startswith((r"/socialmedia", r"/contact", )):
        service = service_name_port_map['contacts-proxy']
        return match_hostname(hostname, service['port'], 'contacts-proxy') + path

    if path.startswith((r"/capabilities", r"/desclaim")):
        service = service_name_port_map['banners-proxy']
        return match_hostname(hostname, service['port'], 'banners-proxy') + path

    if path.startswith((r"/service")) :
        service = service_name_port_map['services-proxy']
        return match_hostname(hostname, service['port'], 'services-proxy') + path

    if path.startswith((r"/testimonial")):
        service = service_name_port_map['testimonials-proxy']
        return match_hostname(hostname, service['port'], 'testimonials-proxy') + path

    if path.startswith((r"/team",)):
        service = service_name_port_map['teams-proxy']
        return match_hostname(hostname, service['port'], 'teams-proxy') + path

if __name__ == "__main__":
    asyncio.run(__launch__())