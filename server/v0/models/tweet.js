'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const errors = require('../utils/config').errors;

const TweetSchema = Schema({
    text: { 
        type: String, 
        required: true
    },
    username: { 
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
            const item = new Tweet({
                text: tweet.text,
                username: tweet.user ? tweet.user.screen_name : null,
                hashtags: mapHashtags(tweet.entities),
                userMentions: mapUserMentions(tweet.entities)
            });
            item.save().then((data) => {
                resolve({
                    successful: true,
                    id: data.id
                });
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        });
    },

    retrieve: (username, hashtag, mention) => {
        return new Promise((resolve, reject) => {
            
        });
    }
};

const mapHashtags = (data) => {
    if (data && data.hashtags) {
        const hashtags = data.hashtags.map((hashtag) => {
            return hashtag.text;
        });
        return hashtags;
    }
    return [];
}

const mapUserMentions = (data) => {
    if (data && data.user_mentions) {
        const mentions = data.user_mentions.map((mention) => {
            return mention.screen_name;
        });
        return mentions;
    }
    return [];
}

const Tweet = module.exports = mongoose.model('tweet', TweetSchema);