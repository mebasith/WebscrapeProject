import requests
import json
from bs4 import BeautifulSoup

def find_country_details(url):
    details_url = url
    details_r = requests.get(details_url)
    soup = BeautifulSoup(details_r.text, 'html.parser')
    details = str(soup)
    details_data = json.loads(details)
    return details_data["Country"]