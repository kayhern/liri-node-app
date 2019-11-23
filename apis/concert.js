const axios = require("axios");
const colors = require("colors")
/*
1. Object
2. Array
3. Funtion
4. Strings
5. Integers
6. Boolean
*/


function concertInformation(userInput) {
    var queryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
            function (response) {
                console.log(response.data)
                if (response.data.length) {
                    response.data.forEach(concert => {
                        console.log(colors.rainbow("----------------------------"))
                        console.log("Venue Name: " + concert.venue.name);
                        console.log("Venue Location: " + concert.venue.city);
                        console.log("Date of Event: " + concert.datetime);
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