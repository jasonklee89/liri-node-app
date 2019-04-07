require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');
var moment = require('moment');
// Access Spotify keys
// var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv[3];

switch (command) {
    case 'concert-this':
        var queryUrl = 'https://rest.bandsintown.com/artists/' + input + '/events?app_id=codingbootcamp';
        console.log(queryUrl)
        axios.get(queryUrl).then(function(response) {
                console.log("Venue: " + response.data[1].venue.name);
                console.log("Location: " + response.data[1].venue.city);
                var date = moment(response.data[1].datetime).format('MM/DD/YYYY');
                console.log("Date: " + date);
            })
        break;
    case 'spotify-this-song':
        break;
    case 'movie-this':
        break;
    case 'do-what-it-says':
        break;
}