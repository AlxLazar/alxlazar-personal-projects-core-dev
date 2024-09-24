# Install requirements when using venv

<--- in global env --->
pip install flask-sqlalchemy 

<--- in venv --->
pip install flask flask-login flask-sqlalchemy python-dotenv 

export FLASK_APP=project
export FLASK_DEBUG=1
export FLASK_ENV=auth

Select python3 as the interpreter

flask run