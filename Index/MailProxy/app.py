import asyncio
import os
import sys

from flask import Flask
from flask_cors import CORS

__DIR__ = os.path.dirname(__file__)
sys.path.insert(0, __DIR__)

app = Flask(__name__)
app.config['APPLICATION_ROOT'] = 'mails-proxy'
CORS(app)


@app.route('/', methods=['GET'])
def proxy():
    return {'status': 200, 'message': 'Mails'}


async def worker(port = None):
    if port is None:
        await asyncio.create_subprocess_shell('''
            export FLASK_ENV=development
            flask run --port 8080
            ''', shell=True, cwd=__DIR__)
    else:
        await asyncio.create_subprocess_shell("waitress-serve --listen=*:{} app:app".format(port), cwd=__DIR__ , shell=True)


if __name__ == '__main__':
    asyncio.run(worker())