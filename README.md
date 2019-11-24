# liri-node-app

Link to Site: https://kayhern.github.io/liri-node-app/


What does this app do? This app provides, song, movie, and concert information for what the user searches


How the app is organized:
liri.js file: this is where the commands are as well as the "do-what-it-says" function. All subsequent files are fed into this one.

movies.js file: this contains the OMDB API function for calling back movie information

spotify.js file: this contains the spotify API function for calling back song information

keys.js file: contains keys for spotify; spotify calls this key to function

random.txt file: contains information to tell the do-what-it-says command what to do


How to run the app:
1. Download the repo to your local machine

2. Open the liri.js file or access it via terminal

3. type "node liri.js concert-this <band of choice>" to get results of band concert dates and venue location, 
  type "node liri.js spotify-this-song <song of choice>" to get song name, title, album, and URL, type "node liri.js do-what-it-says" to get the results from the song title in the random.txt file that will call the spotify command, and finally type "node liri.js <movie name of choice>" to receive movie information from IMDB
  

Videos of the app functioning:
concert-this: https://drive.google.com/file/d/10C6r0k9MGO5XdRhdHVChLijzOELaaWdW/view

spotify-this-song: https://drive.google.com/file/d/1muqf9Atlqtw3aYPh-yhMaQ_Pptog0o0G/view

do-what-it-says: https://drive.google.com/file/d/1XUwbsTqY8VN3v-QuCQcWAHz7jzFRZbQu/view

movie-this: To be added


The technologies used in this app:

Spotify API

Axios NPM

Node.js

Javascript

OMDB API

BandsInTown API

Moment.js

Colors (to make the results colorful in between results for the concert information)


My role: I was assigned this app for a coding boot camp. I designed, tested, and published my code into the git repo. I consulted my coding bootcamp tutor, TAs from class, Google Foo, and classmates with help in making this app
