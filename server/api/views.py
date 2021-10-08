from flask import Blueprint
import requests
import json
from bs4 import BeautifulSoup

main = Blueprint('main', __name__)

@main.route('/movies', methods=['GET'])
def get_movies():
    url = 'http://oscars.yipitdata.com/'
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')
    movies = str(soup)
    data = json.loads(movies)
    return data