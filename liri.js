//all the requires: dotenv, spotify, keys, axios, 
require("dotenv").config();
var moment = require('moment');
// var keys = require("./apis/keys");
const axios = require('axios');
const concert = require("./apis/concert");
const spotify = require("./apis/spotify");

// const db = require('./dot.env');
// db.connect({
// host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS
// });
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
            spotify.spotSong(userInput);
            break;
        case "movie-this":
            movieThis(userInput);
            break;
        case "do-what-it-says":
            doThings(userInput);
            break;
    }
};

// movie-this
function movieThis(userInput) {

};


// do-what-it-says
function doThings(userInput) {

};

//the commands function
theCommands(userData);