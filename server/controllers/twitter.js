'use strict';
const Tweet = require('../models/tweet');
const errors = require('../utils/config').errors;
const q = require('../utils/query');

const save = (body) => {
    return new Promise((resolve, reject) => {
        const item = new Tweet({
            text: body.text,
            username: body.user ? body.user.screen_name : body.user.name,
            hashtags: q.mapHashtags(body.entities),
            userMentions: q.mapUserMentions(body.entities)
        });
        Tweet.save(item).then((result) => {
            resolve(result);
        }).catch((err)  => {
            console.log(err);
            reject(err);
        });
    });
}

const retrieve = (username, hashtag, mention) => {
    return new Promise((resolve, reject) => {
        const query = q.build(username, hashtag, mention);
        Tweet.retrieve(query).then((result) => {
            if(!result || result.length == 0) {
                reject(errors.tweetNotFound);
            } else {
                resolve(result);
            }
            
        }).catch((err)  => {
            console.log(err);
            reject(err);
        });
    });
}

exports.save = save;
exports.retrieve = retrieve;