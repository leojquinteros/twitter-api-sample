'use strict';
const isInteger = require('validator').isInt;
const isInSet = require('validator').isIn;

const validator = {
    isValid: (req) => {
        if (req) {
            const pageSize = req.toString();
            return isInteger(pageSize) &&  isInSet(pageSize, [30, 50, 100]);
        }
        return true;
    }
}

module.exports = validator;