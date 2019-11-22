require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

//need to install npm packages
//Spotify: https://www.npmjs.com/package/node-spotify-api
//Axios: https://www.npmjs.com/package/axios
//step 9