from flask import Flask, request, render_template, redirect, url_for, flash

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)

