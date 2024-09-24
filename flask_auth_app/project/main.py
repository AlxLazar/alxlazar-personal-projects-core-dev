from flask import Blueprint, render_template
from . import db

# Main will contain the blueprint that will be used for all non-authenticated pages
main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/profile')
def profile():
    return render_template('profile.html')