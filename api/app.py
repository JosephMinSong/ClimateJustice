from flask import Flask, jsonify
import pandas as pd
import os

app = Flask(__name__)


@app.route('/api/seattle_weather')
def weather():
    data_directory = os.path.join(os.path.dirname(__file__), 'data')
    combined_data = []

    for dirpath, dirnames, filenames in os.walk(data_directory):
        csv_files = sorted([f for f in filenames if f.endswith('.csv')])
        for filename in csv_files:
            path = os.path.join(dirpath, filename)
            df = pd.read_csv(path, usecols=['temp'])
            combined_data.append(df['temp'].tolist())
        
    return jsonify(combined_data)
