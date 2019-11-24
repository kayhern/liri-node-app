console.log("movies");
const axios = require("axios");
const colors = require("colors")
const database = require('./dot.env');
const db = require('db');
const dotenv = require('dotenv').config();
var omdbKey = trilogy;
//http://www.omdbapi.com/

// movie-this

function movieThis(userInput) {
    var userInput = process.argv.slice(3).join(" ");
    var queryURL = 'http://www.omdbapi.com/?t=' + userInput + '&apikey=' + omdbKey + '&plot=short&tomatoes=true';
    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let body = JSON.parse(body);
            console.log("Title: " + body.Title);
            console.log("Release Year: " + body.Year);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
            console.log("Rotten Tomatoes URL: " + body.tomatoURL);
        } else {
            console.log("There's an error" + error);
        }
    })
};


module.exports = {
    movieThis
}