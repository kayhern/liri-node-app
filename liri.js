require("dotenv").config();
var moment = require('moment');
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
const axios = require('axios');

var spotify = new Spotify(keys.spotify);

//need to install npm packages
//Spotify: https://www.npmjs.com/package/node-spotify-api
//Axios: https://www.npmjs.com/package/axios
//Moment: https://momentjs.com/docs/
//DotEnv
//step 9