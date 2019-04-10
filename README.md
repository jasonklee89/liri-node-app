# liri-node-app
Hi, welcome to LIRI.  LIRI is just like iPhone's SIRI, except it takes input from the terminal's command line rather than by speech.  LIRI takes certain commands (described below), and gives you data about them.  This includes information about concerts, where to find music on Spotify, and movie information.  
First, be sure to type `npm i` into the command line to install all the packages.

Note: if you choose to input a query with more than one word, please be sure to surround your query with "quotes like these".

### Bands In Town API

![LIRI-concert-this](assets/LIRI-concert-this.png?raw=true "LIRI-concert-this")

* Command: `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")


### Spotify API

* Command: `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then the program will default to "The Sign" by Ace of Base.

### OMDB API

* Command: `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

       * Title of the movie.

       * Year the movie came out.

       * IMDB Rating of the movie.

       * Rotten Tomatoes Rating of the movie.

       * Country where the movie was produced.

       * Language of the movie.

       * Plot of the movie.

       * Actors in the movie.

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

### I Want it That Way Command (Spotify API)

* `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call the above command.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
