'use strict';
const errors = {
    missingInput: {
        status: 400,
        message: 'Missing data'
    },
    internalError: {
        status: 500,
        message: 'Internal error.'
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