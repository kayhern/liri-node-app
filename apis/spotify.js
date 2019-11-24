// console.log("spotify loaded");
const axios = require("axios");
const colors = require("colors")
keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// // Spotify: https://www.npmjs.com/package/node-spotify-api
// // spotify-this-song is the command

function spotSong(userInput) {
    var userInput = process.argv.slice(3).join(" ");
    spotify.search({
        type: "track",
        query: userInput,
        limit: 1,
    }, function (err, response) {
        if (err) {
            return console.log("error occurred" + err);
        }
        let result = response.tracks.items[0];
        // console.log(response.tracks.items);
        // console.log(result);
        console.log("Song Name: " + result.name);
        console.log("Album: " + result.album.name);
        console.log("Artist: " + result.artists[0].name)
        console.log("Preview URL: " + result.preview_url);
    })
};

//preview link

module.exports = {
    spotSong
}