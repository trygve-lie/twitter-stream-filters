/* jshint node: true, strict: true */

"use strict";



// Is the message a retweet

module.exports.isRetweet = function (obj) {
    return !!obj.retweeted_status;
};



// Is the message a reply to something

module.exports.isReply = function (obj) {

	// Make sure these exist on the object.
	// Ex a delete message does not.

	if (!obj.in_reply_to_user_id) {
		return false;
	}

	if (!obj.user) {
		return false;
	}

    // Users can reply to them self, which can happen.

    if (obj.in_reply_to_user_id === obj.user.id) {
        return false;
    }

    return !!obj.in_reply_to_status_id;
};
