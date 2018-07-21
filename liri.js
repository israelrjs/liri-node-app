require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var keys = require('./keys');


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


// Tweet
if (process.argv[2] === 'tweet')
client.post('statuses/update', {status: process.argv[3]}, function(error, tweet, response) {
    if (error) {
        console.log(error);
    }
    else{
        console.log('its working');
    }
  });


// getting tweets

if (process.argv[2] === 'my-tweets'){
client.get('statuses/user_timeline', function(error, tweets, response) {
    for (i = 0; i < 20; i++) {
        console.log(tweets[i].text);
        console.log(tweets[i].created_at);
    }
           
      
    });
}


if(process.argv[2]=== 'spotify-this-song'){
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var songs = data.tracks.items
for (i = 0; i < songs.length; i++){
      console.log(songs[i].name);
      console.log(songs[i].preview_url);
      console.log(songs[i].artists[0].name);
      console.log(songs[i].album.name);
   
}
 
});
}
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});
            


    
