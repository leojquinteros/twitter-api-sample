'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const errors = require('../utils/config').errors;

const TweetSchema = Schema({
    username: { 
        type: String, 
        required: true
    },
    text: { 
        type: String, 
        required: true
    },
    hashtags : [{
        type: String, 
        required: false
    }],
    userMentions : [{
        type: String, 
        required: false
    }],
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
},{
    collection: 'tweets'
});

TweetSchema.statics = {

    save: (tweet) => {
        return new Promise((resolve, reject) => {
            Tweet.create(tweet).then((data) => {
                resolve({
                    successful: true,
                    id: data.id
                });
            }).catch((err) => {
                reject(err);
            });
        });
    },

    retrieve: (query) => {
        return new Promise((resolve, reject) => {
            Tweet.find(query).select({ 
                "_id": 0,
                "username": 1, 
                "text": 1,
                "userMentions": 1,
                "hashtags": 1
            }).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        });
    }
};

const Tweet = module.exports = mongoose.model('tweet', TweetSchema);