from flask import Flask, jsonify
import requests
import os

app = Flask(__name__)


@app.route('/api/seattle_weather')
def weather():
    api_key = os.environ.get('WEATHER_API_KEY')
    # parameters = {'key': api_key, 'place_id': 'seattle'}
    url = f"https://www.meteosource.com/api/v1/flexi/time_machine?place_id=london&date=2021-03-15&timezone=UTC&units=auto&key={api_key}"
    response = requests.get(url)

    if response.status_code == 200:
        res = response.json()
        data = res['data']
        return jsonify({'message': f"Weather data: {data}"})
    else:
        return jsonify({'message': 'Failed to fetch weather data'}), 500
