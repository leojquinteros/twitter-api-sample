'use strict';
const errors = {
    invalidPageSize: {
        status: 400,
        message: 'Invalid page size. Possible values are 30, 50, 100 or leave it blank to retrieve all tweets.'
    },
    tweetNotFound: {
        status: 404,
        message: 'Tweet not found.'
    }
};

const commonErrorResponse = (res, error) => {
    const status = error && error.status ? error.status : 500;
    return res.status(status).json({
        successful: false, 
        error: error.message
    });
};

const commonSuccessResponse = (res, data, prevStatus) => {
    const status = prevStatus ? prevStatus : 200;
    return res.status(status).json(data);
};

exports.errors = errors;
exports.commonSuccessResponse = commonSuccessResponse;
exports.commonErrorResponse = commonErrorResponse;