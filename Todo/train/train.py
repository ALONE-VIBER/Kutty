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

def readData(filename="userData.csv"):
    data = []
    if os.path.exists(filename):
        with open(filename,mode='r',newline='',encoding="utf-8") as file:
            reader = csv.DictReader(file)
            for row in reader:
                data.append(row["user"])
    return data

@app.route('/')
def index():
    csvfiledata = readData()
    return render_template('train.html',csvData=csvfiledata)

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get('user', '').lower()
    print(query)
    addData(query)
    return f"Received : {query}"

if __name__ == '__main__':
    app.run(port=1234, use_reloader=True)