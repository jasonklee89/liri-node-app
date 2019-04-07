require("dotenv").config();
var keys = require("./keys.js");
// Access Spotify keys
// var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv[3];
var axios = require('axios');

switch (command) {
    case 'concert-this':
        var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
        console.log(queryUrl)
        axios.get(queryUrl).then(function(response) {
                console.log("Venue: " + response.data[1].venue.name);
            })
        break;
    case 'spotify-this-song':
        break;
    case 'movie-this':
        break;
    case 'do-what-it-says':
        break;
}