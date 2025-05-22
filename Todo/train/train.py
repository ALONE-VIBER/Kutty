import csv
import os
from flask import Flask, request, render_template, jsonify

app = Flask(__name__, template_folder="", static_folder="")

def addData(query, filename="userData.csv"):
    file_exists = os.path.exists(filename)
    with open(filename, mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(['user'])  # Write header if file does not exist
        writer.writerow([query])

@app.route('/')
def index():
    return render_template('train.html')

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get('user', '').lower()
    print("\t--->"+query+"<-----")
    addData(query)
    return f"Received : {query}"

if __name__ == '__main__':
    app.run(port=1234, use_reloader=True)