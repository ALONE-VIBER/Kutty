from flask import Flask,render_template

server = Flask(__name__)

@server.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    server.run(port=2006, use_reloader=True)