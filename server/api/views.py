from flask import Blueprint
import requests
import json
from bs4 import BeautifulSoup
from .scrape_wiki_url import find_country_wiki
from .scrape_details_url import find_country_details


main = Blueprint('main', __name__)


@main.route('/movies', methods=['GET'])
def get_movies():
    url = 'http://oscars.yipitdata.com/'
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')
    movies = str(soup)
    data = json.loads(movies)
    count=0
    for item in data['results']:
        count = count+1
        for film in item["films"]:
            count = count+1
            try:
                url = film["Detail URL"]
                country = find_country_details(url)
                film['country'] = country
            except:
                url = film["Wiki URL"]
                country = find_country_wiki(url)
                film['country'] = country

    return data