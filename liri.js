require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');
// Access Spotify keys
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv[3];

switch (command) {
    case 'concert-this':
        var queryUrl = 'https://rest.bandsintown.com/artists/' + input + '/events?app_id=codingbootcamp';
        console.log(queryUrl)
        axios.get(queryUrl).then(function (response) {
            console.log("Venue: " + response.data[1].venue.name);
            console.log("Location: " + response.data[1].venue.city);
            var date = moment(response.data[1].datetime).format('MM/DD/YYYY');
            console.log("Date: " + date);
        })
        break;
    case 'spotify-this-song':
        spotify.search({ type: 'track', query: input }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log('Artist(s): ' + data.tracks.items[0].album.artists[0].name);
            console.log('Song: ' + data.tracks.items[0].name);
            console.log('Link: ' + data.tracks.items[0].external_urls.spotify);
            console.log('Album: ' + data.tracks.items[0].album.name);
        });
        break;
    case 'movie-this':
        break;
    case 'do-what-it-says':
        break;
}