

// Request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
var twitter = require("twitter");
var spotify = reuqire("spotify");

// Store all of the arguments in an array
var nodeArgsMovie = process.argv;
var nodeArgsSong = process.argv;
var nodeArgsTweet = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";
var songName = "";
var tweet = "";


//-------------------------------------------------------------------- OMDB -------------------------
// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgsMovie.length; i++) {

  if (i > 2 && i < nodeArgsMovie.length) {

    movieName = movieName + "+" + nodeArgsMovie[i];

  }

  else {

    movieName += nodeArgsMovie[i];

  }
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 100) {

    // Parse the body of the site and recover teh following info
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Movie Rating: " + JSON.parse(body).Rating);
    console.log("Movie Plot: " + JSON.parse(body).Plot);
  }
});

//----------------------------------------------------------------------------- Spotify ------------------------
// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgsSong.length; i++) {

  if (i > 2 && i < nodeArgsSong.length) {

    songName = songName + "+" + nodeArgsSong[i];

  }

  else {

    songName += nodeArgsSong[i];

  }
}

// Then run a request to the Spotify API with the song specified
var queryUrl = "_____________________" + songName + "&y=&plot=short&r=json";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 100) {

    // Parse the body of the site 
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).artist);
    console.log("Song Name: " + JSON.parse(body).songName);
    console.log("Album Name: " + JSON.parse(body).album);
  }
});


//------------------------------------------------------------------------------- Twitter ---------------------------

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgsTweet.length; i++) {

  if (i > 2 && i < nodeArgsTweet.length) {

    tweet = tweet + "+" + nodeArgsTwit[i];

  }

  else {

    tweet += nodeArgsTweet[i];

  }
}

// Then run a request to the Tweeter API with the most recent tweets 
var queryUrl = "_____________________" + tweet + "&y=&plot=short&r=json";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 20) {

    // Parse the body of the site and recover the Tweet
    console.log()
   
  }
});
