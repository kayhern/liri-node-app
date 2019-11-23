console.log("spotify loaded");
const axios = require("axios");
const colors = require("colors")
keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


// // Spotify: https://www.npmjs.com/package/node-spotify-api
// // spotify-this-song is the command

//need to default to "The Sign" by Ace of Base if no song is provided by user

function spotSong(userInput) {
    spotify.search({
        type: "track",
        query: userInput,
        limit: 1,
    }, function (err, response) {
        if (err) {
            return console.log("error occurred" + err);
        }
        let result = response.tracks.items[0];
        console.log(response);
        console.log(result);
        console.log(result.name);
        console.log(result.album.name);
        console.log(result.artists[0].name)
        console.log("Preview URL: " + result.preview_url);

    })
};

//preview link



module.exports = {
    spotSong
}