# this is a flask app
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def sign_in():
    return render_template('signin.html')
@app.route('/signup')
def signup():
    return render_template('signup.html')
@app.route('/dashboard')
def dashboard():
    return render_template('main.html')
if __name__ == "__main__":
    app.run() # removed (debug=True) as i have it is gone for production...