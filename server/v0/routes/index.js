'use strict';
const express = require('express');
const app = express();

//API routes here

app.use((req, res, next) => {
    res.status(404).json({
        message:'Resource not found: ' + req.url 
    });
});

module.exports = app;