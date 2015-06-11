/* jshint node: true, strict: true */

"use strict";

var through = require('through2'),
    utils   = require('./utils.js');



module.exports.removeRetweets = function () {
    return through({ objectMode: true }, function (obj, enc, callback) {
        if (utils.isRetweet(obj)) {
            callback();
            return;
        }
        this.push(obj);
        callback();
    });
};



module.exports.removeReplies = function () {
    return through({ objectMode: true }, function (obj, enc, callback) {
        if (utils.isReply(obj)) {
            callback();
            return;
        }
        this.push(obj);
        callback();
    });
};
