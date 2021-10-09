from flask import Blueprint
import requests
import json
import ast
from bs4 import BeautifulSoup

main = Blueprint('main', __name__)

def find_country_wiki(url):
    wiki_url = url
    wiki_r = requests.get(wiki_url)
    soup = BeautifulSoup(wiki_r.text, 'html.parser')
    wiki_table = soup.find('table', class_ = 'infobox vevent')
    foundCountry = False
    country = None
    for box in wiki_table.find_all('tbody'):
        rows = box.find_all('tr')
        for row in rows: 
            # print(row)
            # print('----')
            for headings in row:
                for head in headings:
                    # print('*****', head.string)
                    # print(head.string == 'Country')
                    if(foundCountry==True):
                        # print('!!!', head.string)
                        country = head.string
                        return country
                    elif(head.string=='Country'):
                        foundCountry = True

def find_country_details(url):
    details_url = url
    details_r = requests.get(details_url)
    soup = BeautifulSoup(details_r.text, 'html.parser')
    details = str(soup)
    details_data = json.loads(details)
    return details_data["Country"]

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
                #print('--->', film['Film'], country)
                film['country'] = country
            except:
                url = film["Wiki URL"]
                country = find_country_wiki(url)
                #print('--->', film['Film'], country)
                film['country'] = country
  
    # print(count)
    
    return data