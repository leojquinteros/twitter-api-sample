'use strict';
const queryHelper = {

    mapHashtags: (data) => {
        if (data && data.hashtags) {
            const hashtags = data.hashtags.map((hashtag) => {
                return hashtag.text;
            });
            return hashtags;
        }
        return [];
    },

    mapUserMentions: (data) => {
        if (data && data.user_mentions) {
            const mentions = data.user_mentions.map((mention) => {
                return mention.screen_name;
            });
            return mentions;
        }
        return [];
    },

    buildAggregateQuery: (username, hashtag, mention) => {
        const query = [];
        if (username) {
            query.push({
                $match: {
                    'username': username,
                }
            });
        }
        if(hashtag) {
            query.push({
                $unwind: "$hashtags" 
            },{
                $match: { 
                    'hashtags.a': hashtag
                }
            }, { 
                $group: {
                    "username" : { $first: "$username" },
                    "text" : { $first: "$text" },
                    "userMentions" : { $first: "$userMentions" },
                    hashtags: { 
                        $push: '$hashtags.a'
                    }
                }
            });
        }
        if(mention) {
            query.push({ 
                $unwind: "$userMentions" 
            },{   
                $match: { 
                    'userMentions.a': mention
                }
            }, { 
                $group: {
                    "username" : { $first: "$username" },
                    "text" : { $first: "$text" },
                    "hashtags" : { $first: "$hashtags" },
                    userMentions: { 
                        $push: '$userMentions.a'
                    }
                }
            });
        }
        return query;
    }
};

module.exports = queryHelper;