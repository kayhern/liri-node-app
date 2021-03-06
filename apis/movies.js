console.log("movies");
const axios = require("axios");
const colors = require("colors")
const database = require('./dot.env');
const db = require('db');
const dotenv = require('dotenv').config();
var omdbKey = trilogy;
//http://www.omdbapi.com/
//https://stackoverflow.com/questions/33864769/how-to-get-data-from-omdb-api-web-service

// movie-this

function movieThis(userInput) {
    var userInput = process.argv.slice(3).join(" ");
    var queryURL = 'http://www.omdbapi.com/?t=' + userInput + '&apikey=' + omdbKey + '&plot=short&tomatoes=true';
    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let body = JSON.parse(body);
            console.log("Movie Title: " + body.Title);
            console.log("Year: " + body.Year);
            console.log("IMDB Rating: " + body.imdbRating);
            console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors/Actresses: " + body.Actors);
        } else {
            console.log("There's an error" + error);
        }
    })
};


module.exports = {
    movieThis
}