# kutty - small milestone/
# │
# ├── localhost.py
# ├── templates/
# │   └── index.html
# └── static/
#     ├── style.css
#     └── script.js

from flask import Flask, request, render_template

app = Flask(__name__
            ,template_folder='train'
            ,static_folder='train'
            )

@app.route('/')
def index():
    return render_template('train.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    email = request.form['email']
    return f"<h3>Thanks, {name}! We received your email: {email}</h3>"

if __name__ == '__main__':
    app.run(port=1234, use_reloader=False)
