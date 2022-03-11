import ast  as ast
import json as json

from flask import (
    Flask, 
    jsonify, 
    request, 
    flash, 
    redirect, 
    url_for,
    render_template,
    send_file
)

from .main import get_app


from .database import *

from .models import (
    Projecto,
    Details,
    ImageLink
)

from .utils import *