var elfCallServer = {

    loadBitly: function() {
        'use strict';
        $('#displayContainer').load('/bitly');
    },

    loadDelicious: function() {
        'use strict';
        $('#displayContainer').load('/delicious', function(response, status, xhr) {
            if (status == 'error') {
                var msg = 'Sorry but there was an error: ';
                console.log(msg + xhr.status + ' ' + xhr.statusText);
            } else {
                elfDelicious.deliciousSetup();
            }
        });
    },

    loadTwitter: function() {
        'use strict';
        $('#displayContainer').load('/twitter', function(response, status, xhr) {
            if (status == 'error') {
                var msg = 'Sorry but there was an error: ';
                console.log(msg + xhr.status + ' ' + xhr.statusText);
            } else {
                elfTwitter.twitterSetup();
            }
        });

    }
};
