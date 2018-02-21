const Twitter = require('twitter');
const twitterConfig = require('../../../config/config').twitter;

const client = new Twitter({
    consumer_key: twitterConfig.consumer_key,
    consumer_secret: twitterConfig.consumer_secret,
    access_token_key: twitterConfig.access_token_key,
    access_token_secret: twitterConfig.access_token_secret
});

client.stream('statuses/filter', {track: 'javascript'}, (stream) => {
    stream.on('data', (tweet) => {
        console.log(tweet.text);
        console.log(tweet.entities);
    });
   
    stream.on('error', (error) => {
      throw error;
    });

});
