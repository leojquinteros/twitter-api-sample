'use strict';
const express = require('express');
const app = express();

//API routes
//app.use('/api', api);

app.use((req, res, next) => {
    res.status(404).json({
        message:'Resource not found: ' + req.url 
    });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
});

module.exports = app;