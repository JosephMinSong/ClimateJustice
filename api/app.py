from flask import Flask, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)

@app.route('/api/seattle_weather')
def weather():
    api_key = os.environ.get('WEATHER_API')
    parameters = {'key': api_key, 'place_id': 'london'}
    url = "https://www.meteosource.com/api/v1/free/point"
    response = requests.get(url, params=parameters)

    if response.status_code == 200:
        data = response.json()
        return jsonify({'message': f"Weather data: {data}"})
    else:
        return jsonify({'message': 'Failed to fetch weather data'}), 500

