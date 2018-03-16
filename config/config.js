module.exports = {
  general: {
    port: 3000
  },
  database: {
    mongodbEndpoint: process.env.MONGODB_ENDPOINT | 'mongodb://127.0.0.1:27017/twitter-api-sample'
  },
  twitter: {
    filter_keyword: 'javascript',
    consumer_key: process.env.TWITTER_CONSUMER_KEY || 'nfYizmIyqA5ZchhJvNI67wvfh',
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'zmxDPvr6OdY66gEZha4JmZVf8x2lD2ts67GGTJBeAsUIuVGBLu',
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '181833641-IB3zBNcoYncSM8kETProT2BL2aQLnLPvn4eKRhvA',
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'UeBlrjvZlwJvLH574J1XFzdJ1qSQC0XXbTi7ULns6gurx'
  }
}
