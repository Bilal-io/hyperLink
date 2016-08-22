var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var elfTwitterClient;

function getClient() {
    'use strict';
    if (!elfTwitterClient) {
        elfTwitterClient = new Twitter({
            consumer_key: 'L4PZUcTDjvmdnjeS0262idhFN',
            consumer_secret: 'cE39lhjX1sQ039QycByAbTAo6trD5ctz21R7K6OGefXcmvQOVm',
            access_token_key: '136364417-iZuKvXhQq1lGtGseCgZkdABRUYkPTJcv4nQJ2LTK',
            access_token_secret: 'gcNPxNOKyYMV879skopmHe4J07narfCI5Erxu5tJPWx0y'
        });
    }
    return elfTwitterClient;
}

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'HyperExplorer',
        author: 'Bilal khoukhi'
    });
});

router.get('/delicious', function(req, res, next) {
    'use strict';
    res.render('delicious', {
        title: 'Delcious'
    });
});

router.get('/bitly', function(req, res, next) {
    'use strict';
    console.log('bitly called');
    try {
        res.render('bitly', {
            title: 'Bitly'
        });
    } catch (e) {
        console.log(e);
        next(e);
    }
});

router.get('/twitter', function(req, res, next) {
    'use strict';
    res.render('twitter', {
        title: 'Twitter'
    });
});

router.get('/search', function(req, res, next) {
    'use strict';
    var client = getClient();
    var params = {
        q: ''
    };
    client.get('search/tweets', req.query, function(error, tweets, response) {
        if (!error) {
            res.send(tweets);
        } else {
            res.send({
                fail: error
            });
        }
    });
});

router.get('/user-timeline', function(req, res, next) {
    'use strict';
    var client = getClient();
    var params = {
        screen_name: ''
    };
    client.get('statuses/user_timeline', req.query, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
            res.send(tweets);
        } else {
            console.log(error);
            res.send({
                fail: error
            });
        }
    });

});

module.exports = router;
