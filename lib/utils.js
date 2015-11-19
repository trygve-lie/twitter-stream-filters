/* jshint node: true, strict: true */

"use strict";

var util = require('core-util-is');



// Is the message a retweet

module.exports.isRetweet = function (obj) {
    return !util.isNullOrUndefined(obj.retweeted_status);
};



// Is the message a reply to something

module.exports.isReply = function (obj) {

    // Make sure these exist on the object.
    // Ex a delete message does not.

    if (util.isNullOrUndefined(obj.in_reply_to_user_id)) {
        return false;
    }

    if (util.isNullOrUndefined(obj.user)) {
        return false;
    }

    // Users can reply to them self, which can happen.

    if (obj.in_reply_to_user_id === obj.user.id) {
        return false;
    }

    return !util.isNullOrUndefined(obj.in_reply_to_status_id);
};



// Is the message a notification about a deleted tweet

module.exports.isDelete = function (obj) {
    return !util.isNullOrUndefined(obj.delete);
};
