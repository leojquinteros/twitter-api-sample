'use strict'
const express = require('express')
const router = express.Router()
const config = require('../../utils/config')
const twitterCtrl = require('../../controllers/twitter')

router.get('/tweets', (req, res, next) => {
  twitterCtrl.retrieve(req.query.size, req.query.user, req.query.hashtag, req.query.mention).then((result) => {
    config.commonSuccessResponse(res, result)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

module.exports = router
