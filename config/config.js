module.exports = {
    general: {
        port: 3000
    },
    database: {
        mongodbEndpoint : process.env.MONGODB_ENDPOINT | 'mongodb://127.0.0.1:27017/twitter-api-sample',
    },
    twitter: {
        consumer_key: process.env.TWITTER_CONSUMER_KEY || 'nTHdp9DBYePKqgUUcQkTN77xQ',
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'rMPCW9YevDJOhaP9pKzc6F4wulPAkkrtHhLo5fx4kBJ0DPil4y',
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '181833641-vn8Zn59Dyno7KdfxrIgAr81WE8ir8EAShg3cGh0v',
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'OkEqfCOpWvDlBllITf5qnTezQhXLiAGlsWO10B0hcEJk6'
    }
};