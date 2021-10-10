

## Getting Started

1. Unzip files onto your local system

## Run Backend Server
2. Open a terminal session
3. cd into the `server` directory
4. Create a virtual environment with `pipenv install -r requirements.txt`. If you don't have pipenv, you can install it with `pip install --user pipenv`. 
5. Run virtual environment by running command `pipenv shell` 
6. Run the flask app with `flask run`
7. Server-side data will be hosted at [localhost:5000/movies](http://localhost:5000/movies)

## Run Frontend server
8. With the backend server running in the background, open a separate terminal session
9. cd into the `client` directory
10. Run `npm install` from your terminal
11. To run the application run `npm start`
12. Navigate to [localhost:1337](http://localhost:1337) 
13. Once at the URL, the app will begin the scraping. The scraping takes some time--it can take up to around 60-80 seconds. Once it is done, the populated table of data will be rendered.

