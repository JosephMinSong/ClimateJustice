from flask import Flask, jsonify
import pandas as pd
import os

app = Flask(__name__)


@app.route('/api/seattle_weather')
def weather():
    data_directory = os.path.join(os.path.dirname(__file__), 'data')
    combined_data = []

    for filename in os.listdir(data_directory):
        path = os.path.join(data_directory, filename)
        df = pd.read_csv(path, usecols=['temp'])
        combined_data.append(df['temp'].tolist())
    
    return jsonify(combined_data)
