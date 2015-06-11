# twitter-stream-filters

[![Dependencies](https://img.shields.io/david/trygve-lie/twitter-stream-filters.svg?style=flat-square)](https://david-dm.org/trygve-lie/twitter-stream-filters)

A set of convenience filters for filtering messages from the [Twitter Stream API](https://dev.twitter.com/streaming/overview) 
- These are a through streams to be used with the [twitter-stream-api](https://github.com/trygve-lie/twitter-stream-api) 
module.



## Installation

```bash
$ npm install twitter-stream-filters
```


## Simple usage

Connect to the Twitter stream API and listen on messages from two users and but
filter out all retweets the users do from the stream.

```js
var TwitterStream = require('twitter-stream-api'),
	TwitterFilter = require('twitter-stream-filters'),
    through = require('through2');

var keys = {
    consumer_key : "your_consumer_key",
    consumer_secret : "your_consumer_secret",
    access_token_key : "your_access_token_key",
    access_token_secret : "your_access_token_secret"
};

var Twitter = new TwitterStream(keys);
Twitter.stream('public', {
    follow: '2840926455,65706552'
});

var Retweets = new TwitterFilter.removeRetweets();

Twitter.pipe(Retweets).pipe(through({ objectMode: true }, function (obj, enc, callback) {
    console.log(obj.id);
    this.push(obj);
    callback();
 }));
```



## License 

The MIT License (MIT)

Copyright (c) 2015 - Trygve Lie - post@trygve-lie.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
