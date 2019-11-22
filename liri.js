require("dotenv").config();
var moment = require('moment');
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
const axios = require('axios');
require('dotenv').config()
var spotify = new Spotify(keys.spotify);
const db = require('db')
db.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS
});

//Spotify: https://www.npmjs.com/package/node-spotify-api
//Axios: https://www.npmjs.com/package/axios
//Moment: https://momentjs.com/docs/
//DotEnv: https://www.npmjs.com/package/dotenv
//step 9