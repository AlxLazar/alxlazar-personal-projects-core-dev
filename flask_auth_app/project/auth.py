from flask import Blueprint, render_template
from . import db

# Auch will contain the blueprint that will be used for all authenticated pages
auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return render_template('login.html')

@auth.route('/signup')
def signup():
    return render_template('signup.html')

@auth.route('/logout')
def logout():
    return 'Logout'