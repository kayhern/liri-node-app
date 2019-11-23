//all the requires: dotenv, spotify, keys, axios, 
require("dotenv").config();
var moment = require('moment');
// var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
const axios = require('axios');
const concert = require("./apis/concert");
// var spotify = new Spotify(keys.spotify);
// const db = require('./dot.env');
// db.connect({
// host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS
// });
//Spotify: https://www.npmjs.com/package/node-spotify-api
//Axios: https://www.npmjs.com/package/axios
//Moment: https://momentjs.com/docs/
//DotEnv: https://www.npmjs.com/package/dotenv

//this is the command
var userData = process.argv[2];
//need user input - this is what the user inputs
var userInput = process.argv.slice(3).join(" ")

//function for the commands and calling the API functions
//switch: https://www.w3schools.com/js/js_switch.asp
function theCommands(userData) {
    switch (userData) {
        case "concert-this":
            concert.concertInformation(userInput);
            break;
        case "spotify-this-song":
            spotSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doThings();
            break;
    }
};

//using functionality from this activity: https://harvard.bootcampcontent.com/Harvard-Coding-Boot-Camp/hu-cam-fsf-pt-09-2019-u-c/blob/master/Week_10/01-Activities/17-OMDB_Axios/omdbAxios.js
//this requires this API with axios: https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.0
//need: vanue name, venue location, date of event
//date of event will use moment for formatting
//the API functions


// spotify-this-song
function spotSong() {

};

// movie-this
function movieThis() {

};


// do-what-it-says
function doThings() {

};

//the commands function
theCommands(userData);