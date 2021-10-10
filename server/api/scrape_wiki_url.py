import requests
import json
from bs4 import BeautifulSoup

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
            for headings in row:
                for head in headings:
                    if(foundCountry==True):
                        country = head.string
                        return country
                    elif(head.string=='Country'):
                        foundCountry = True