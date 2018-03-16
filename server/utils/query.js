'use strict'
const queryHelper = {

  mapHashtags: (data) => {
    if (data && data.hashtags) {
      const hashtags = data.hashtags.map((hashtag) => {
        return hashtag.text
      })
      return hashtags
    }
    return []
  },

  mapUserMentions: (data) => {
    if (data && data.user_mentions) {
      const mentions = data.user_mentions.map((mention) => {
        return mention.screen_name
      })
      return mentions
    }
    return []
  },

  build: (username, hashtag, mention) => {
    const query = {}
    if (username) {
      query.username = username
    }
    if (hashtag) {
      query.hashtags = {
        $elemMatch: { $eq: hashtag }
      }
    }
    if (mention) {
      query.userMentions = {
        $elemMatch: { $eq: mention }
      }
    }
    return query
  }
}

module.exports = queryHelper
