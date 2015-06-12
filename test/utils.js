/* jshint node: true, strict: true */
/* global describe: true, it: true, before: true */

"use strict";

var fs      = require('fs'),
    path    = require('path'),
    tap     = require('tap'),
    utils   = require('../lib/utils.js');




tap.test('utils.isRetweet() - object is a retweet', function (t) {
    fs.readFile(path.resolve(__dirname, 'mock.retweet.json'), 'utf-8', function (error, data) {
        var obj = JSON.parse(data);
        t.equal(true, utils.isRetweet(obj), 'is true');
        t.end();
    });
});


tap.test('utils.isRetweet() - object not a retweet', function (t) {
    fs.readFile(path.resolve(__dirname, 'mock.tweet.json'), 'utf-8', function (error, data) {
        var obj = JSON.parse(data);
        t.equal(false, utils.isRetweet(obj), 'is false');
        t.end();
    });
});


tap.test('utils.isRetweet() - object is a delete message', function (t) {
    fs.readFile(path.resolve(__dirname, 'mock.delete.json'), 'utf-8', function (error, data) {
        var obj = JSON.parse(data);
        t.equal(false, utils.isRetweet(obj), 'is false');
        t.end();
    });
});


tap.test('utils.isReply() - object is a delete message', function (t) {
    fs.readFile(path.resolve(__dirname, 'mock.delete.json'), 'utf-8', function (error, data) {
        var obj = JSON.parse(data);
        t.equal(false, utils.isReply(obj), 'is false');
        t.end();
    });
});


tap.test('utils.isReply() - object is a reply to a user message', function (t) {
    fs.readFile(path.resolve(__dirname, 'mock.reply.to.user.json'), 'utf-8', function (error, data) {
        var obj = JSON.parse(data);
        t.equal(true, utils.isReply(obj), 'is false');
        t.end();
    });
});
