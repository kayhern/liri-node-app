const axios = require("axios");
const colors = require("colors")
var moment = require('moment');
//Axios: https://www.npmjs.com/package/axios

//using functionality from this activity: https://harvard.bootcampcontent.com/Harvard-Coding-Boot-Camp/hu-cam-fsf-pt-09-2019-u-c/blob/master/Week_10/01-Activities/17-OMDB_Axios/omdbAxios.js
//this requires this API with axios: https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.0
//need: vanue name, venue location, date of event
//date of event will use moment for formatting
//the API functions

function concertInformation(userInput) {
    var queryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
            function (response) {
                // console.log(response.data)
                if (response.data.length) {
                    response.data.forEach(concert => {
                        console.log(colors.rainbow("----------------------------"))
                        console.log("Venue Name: " + concert.venue.name);
                        console.log("Venue Location: " + concert.venue.city);
                        console.log("Date of Event: " + moment(concert.datetime).format("MM/DD/YYYY"));
                        console.log(colors.rainbow("----------------------------"))
                    });
                } else {
                    console.log("Artist not found")
                }
            })
        .catch(function (error) {
            console.log(error)
        });
};

module.exports = {
    concertInformation
}