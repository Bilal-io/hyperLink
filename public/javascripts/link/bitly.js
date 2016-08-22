var elfBitly = {

    baseUrl: 'https://api-ssl.bitly.com/v3/user/link_history?access_token=',
    localUrl: './data/bitly-links.json',

    linkIndex: 0,

    bitlyLinks: null,
    start: function() {
        'use strict';
        $('#localData').prop('checked', true);
        if ($('#bitlyLocal').is(':checked')) {
            elfBitly.getLinks(elfDownloads.dataTypes.dtLocal);
        } else if ($('#bitlyCloud').is(':checked')) {
            elfBitly.getLinks(elfDownloads.dataTypes.dtCloud);
        }
        $('#dataSource').click(elfDownloads.dataTypeSelection);
    },

    getUrl: function(accessToken) {
        'use strict';

        if (accessToken === elfDownloads.dataTypes.dtLocal) {
            return elfBitly.localUrl;
        } else {
            return elfBitly.baseUrl + elfDownloads.accessToken;
        }
    },

    getLinks: function(accessToken) {
        'use strict';
        var url = elfBitly.getUrl(accessToken);
        $.getJSON(url, function(result) {
            elfBitly.linkIndex = 0;
            elfBitly.bitlyLinks = result;
            elfDisplay.render();
            elfDisplay.renderTable(elfBitly.getLinkHistoryArray());
            $('#displayLinks').html(JSON.stringify(result, null, 4));
        }).fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ', ' + error;
            console.log('Request Failed: ' + err);
            console.log('url:', url);
        });
    },

    getStatusCode: function(accessToken) {
        'use strict';
        return elfBitly.bitlyLinks.status_code;
    },
    getStatusText: function(accessToken) {
        'use strict';
        return elfBitly.bitlyLinks.status_txt;
    },
    getLinkHistory: function(index, setLinkIndex) {
        'use strict';
        if (setLinkIndex) {
            elfBitly.linkIndex = parseInt(index);
        }
        return elfBitly.bitlyLinks.data.link_history[index];

    },

    getLinkHistoryArray: function() {
        'use strict';
        return elfBitly.bitlyLinks.data.link_history;
    },
    getLinkHistoryItem: function(index, setLinkIndex) {
        'use strict';
        if (setLinkIndex) {
            elfBitly.linkIndex = index;
        }
        return elfBitly.getLinkHistoryArray()[index];
    },
    getMap: function() {
        'use strict';
        return elfBitly.bitlyLinks.data.link_history.map(function(history) {
            var myDate = new Date(history.created_at * 1000);
            return {
                title: history.title,
                link: history.link,
                created_at: myDate.toLocaleDateString()
            };
        });
    }

};

$(document).ready(function() {
    'use strict';
    elfBitly.start();
});
