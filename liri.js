//all the requires: dotenv, spotify, keys, axios, 
require("dotenv").config();
const fs = require("fs");
//Moment: https://momentjs.com/docs/
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

//DotEnv: https://www.npmjs.com/package/dotenv

//this is the command
var userData = process.argv[2];
//need user input - this is what the user inputs
var userInput = process.argv.slice(3).join(" ");

// do-what-it-says
//https://stackoverflow.com/questions/10058814/get-data-from-fs-readfile
function doThings(userInput) {
    fs.readFile("./apis/random.txt", "utf8", function (err, data) {
        // console.log(data.split(","));
        let dataArray = data.split(",");
        // console.log(dataArray[0], dataArray[1]);
        console.log(dataArray[0]);
        console.log(dataArray[1]);
        theCommands(dataArray[0], dataArray[1]);
    });

};

//function for the commands and calling the API functions
//switch: https://www.w3schools.com/js/js_switch.asp
function theCommands(userData, userInput) {
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
function movieThis(userData, userInput) {

};

//the commands function
theCommands(userData, userInput);