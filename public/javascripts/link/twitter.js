var elfTwitter = {
    twitterSetup: function(e) {
        'use strict';
        elfTwitter.clearControls();
        $('#search').click(function() {
            elfTwitter.search();
        });
        $('#getTimeline').click(function() {
            elfTwitter.timeline();
        });

    },
    clearControls: function() {
        'use strict';
        $('#tweetList').empty();
        $('#tableLinks').empty();
    },
    appendUrl: function(selector, index, text, url) {
        'use strict';
        var anchor = '<a href="' + url + '" target="_blank">' + text + '</a>';
        var details = '<a onclick="detailDelicious(' + index + ')">Details</a>';
        $(selector).append('<li>' + anchor + ' - ' + details + '</li>');
    },
    renderTable: function(text, user) {
        'use strict';
        var title = '<td>' + text + '</td>';
        var keyword = '<td>' + user + '</td>';
        var tableRowStart = '<tr>';
        $('#tableLinks').append(tableRowStart + title + keyword + '<tr>');
    },

    search: function() {
        'use strict';
        var search = $('#searchQuery').val();
        $.getJSON('/search', {
            'q': search
        }, function(result) {
            console.log(result);
            $('#tweetData').html(JSON.stringify(result, null, 4));
            elfTwitter.clearControls();
            $.each(result.statuses, function(index, tweet) {
                console.log(tweet.text);
                elfTwitter.renderTable(tweet.text, tweet.user.name);
                if (undefined !== tweet.entities.urls.length && tweet.entities.urls.length > 0) {
                    elfTwitter.appendUrl('#tweetList', index, tweet.text, tweet.entities.urls[0].url);
                }
            });
        });
    },
    timeline: function() {
        'use strict';
        var timeline = $('#timelineQuery').val();
        $.getJSON('/user-timeline', {
            'screen_name': timeline
        }, function(result) {
            $('#tweetData').html(JSON.stringify(result, null, 4));
            elfTwitter.clearControls();
            $.each(result, function(index, tweet) {
                if (tweet.entities.urls.length > 0) {
                    elfTwitter.appendUrl('#tweetList', index, tweet.text, tweet.entities.urls[0].url);
                } else {
                    elfTwitter.renderTable(tweet.text, tweet.user.name);
                    $('#tweetList').append('<li>' + tweet.text + '</li>');
                }
            });
        });
    }
};
