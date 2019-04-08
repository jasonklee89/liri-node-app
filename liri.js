require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var fs = require('fs');
// Access Spotify keys
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv[3];

switch (command) {
    case 'concert-this':
        concertSearch();
        break;
    case 'spotify-this-song':
        spotifySearch();
        break;
    case 'movie-this':
        movieSearch();
        break;
    case 'do-what-it-says':
        doWhat();
        break;
}

function concertSearch() {
    var queryUrl = 'https://rest.bandsintown.com/artists/' + input + '/events?app_id=codingbootcamp';
        console.log(queryUrl)
        axios.get(queryUrl).then(function (response) {
            var date = moment(response.data[1].datetime).format('MM/DD/YYYY');
            console.log("Venue: " + response.data[1].venue.name);
            console.log("Location: " + response.data[1].venue.city);
            console.log("Date: " + date);
        });
};

function spotifySearch() {
    if (input == null) {
        spotify.search({ type: 'track', query: 'The Sign Ace of Base' }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            };
            console.log('Artist(s): ' + data.tracks.items[0].album.artists[0].name);
            console.log('Song: ' + data.tracks.items[0].name);
            console.log('Link: ' + data.tracks.items[0].external_urls.spotify);
            console.log('Album: ' + data.tracks.items[0].album.name);
        });
    } else {
    spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        };
        console.log('Artist(s): ' + data.tracks.items[0].album.artists[0].name);
        console.log('Song: ' + data.tracks.items[0].name);
        console.log('Link: ' + data.tracks.items[0].external_urls.spotify);
        console.log('Album: ' + data.tracks.items[0].album.name);
    });
    };
}

function movieSearch() {
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
        if (input == null) {
            queryUrl = "http://www.omdbapi.com/?t=mr%20nobody&y=&plot=short&apikey=trilogy"
        }
        axios.get(queryUrl).then(function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
            console.log("Country Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        });
};

function doWhat() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        var dataArr = data.split(",");
        input = dataArr[1];
        spotifySearch();
      });
};