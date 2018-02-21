const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Twitter = require('twitter');
const config = require('./config/config');
const index = require('./server/routes/index');
const twitterCtrl = require('./server/controllers/twitter'); 

const app = express();

//Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(config.database.mongodbEndpoint, {
  useMongoClient: true,
  promiseLibrary: global.Promise
}).then(() => { 
    console.log(`Connected to MongoDB at: ${new Date()}`) 
  },
  err => { 
    console.error.bind(console, 'Connection error:') 
  }
);

//Twitter stream connection
const client = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  access_token_secret: config.twitter.access_token_secret
});

client.stream('statuses/filter', {track: config.twitter.filter_keyword}, (stream) => {
  stream.on('data', (tweet) => {
      twitterCtrl.save(tweet).then((result) => {
          console.log('Tweet saved successfuly:', result);
      }).catch((err)  => {
          console.log(err);
      });
  });

  stream.on('error', (error) => {
      throw error;
  });
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', index);

module.exports = app;