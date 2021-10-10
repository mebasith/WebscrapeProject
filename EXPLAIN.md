# My Approach 

## Languages/Technologies
- I built the backend of the app using Python's Flask framework to build and run the backend server. I also used Python's Beautiful Soup library to handle the webscraping. Lastly, I built the frontend with React, per the prompt instructions. 


## Webscraping 

- For the webscraping, I initially gave some consideration to using JavaScript, using Puppeteer--a  headless chrome browser that can be used to programmatically view URL pages and extract their text. I also gave consideration to using Python's Beautiful Soup library to do the webscraping. After trying each, I went with Python and Beautiful Soup because of how efficiently it was able to do the desired scrape in much fewer lines of code and it seemed to be running scrapes quicker.
- The biggest challenge, by far, with the webscraping was getting the Country data. To get the Country data, I had to follow the links for "Detail URL" and "Wiki URL" that were provided within the initial data pull from YipitData's webpage. I had to design the webscrape to go into both links, because some the "Detail URL" links were broken, and some of the "Wiki URL" links went to pages that did not include Country data. This added layer of scraping ultimately made the webscraping function much slower, but it had to be done in order to get the Country data. 

## Backend 
- Having decided to go with Python/Beautiful Soup, I knew I needed to build a Python backend. I start by giving consideration to both the Django and Flask frameworks to build the backend. I ultimately thought Django was too heavyweight for a small app like this and thought the lightweight Flask framework would make the most sense here. 

## Frontend
 - The frontend was built with React. I used functional components using the useState api to manage state and the useEffect api to handle the initial axios request upon the main "Movies" component's initial mounting. The axios request makes the call to the endpoint in the backend that does the work of the webscraping. Once that data is recieved, the Table component is rendered with the populated data. 

## Version Control
- I used Git for version control. 

## Room For Improvement 
 - With more time, I would have liked the clean some of the data, namely the "Year" data and the "Country" data.

