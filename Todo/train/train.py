import csv
import os
from flask import Flask, request, render_template, jsonify

app = Flask(__name__, template_folder="", static_folder="")

def addData(date, time, user, filename="userData.csv"):
    file_exists = os.path.exists(filename)
    with open(filename, mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(['date', 'time', 'user' ])  # Write header if file does not exist
        writer.writerow([date, time, user])

def readData(filename="userData.csv"):
    data = []
    if os.path.exists(filename):
        with open(filename, mode='r', newline='', encoding="utf-8") as file:
            reader = csv.DictReader(file)
            for row in reader:
                data.append(f"{row['user']} ({row['date']} {row['time']})")
    print(data)
    return data

@app.route('/api/users', methods=['GET'])
def get_users():
    users = readData()
    print("python->",users)
    return jsonify(users)

@app.route('/')
def index():
    csvfiledata = readData()
    return render_template('train.html',csvData=csvfiledata)

@app.route('/add', methods=['POST'])
def search():
    data = request.get_json()
    date = data.get('date', '').strip()
    time = data.get('time', '').strip()
    user = data.get('user', '').strip()
    print(date,'\t',time,'\t',user)
    addData(date,time,user)
    return f"Received : {date} {time} {user}"

if __name__ == '__main__':
    app.run(port=1234, use_reloader=True)