var elfDownloads = function() {
    'use strict';
};

elfDownloads.accessToken = '5909f47139ce43fbece34e7fa34a56702e28477e';

elfDownloads.dataTypes = {
    'dtLocal': 0,
    'dtDelicious': 1,
    'dtBitly': 2,
    'dtTwitter': 3
};

elfDownloads.clearControls = function() {
    'use strict';
    $('#tableLinks').empty();
};

elfDownloads.dataType = elfDownloads.dataTypes.dtLocal;

elfDownloads.dataTypeSelection = function(event) {
    'use strict';
    if ($('#localData').is(':checked')) {
        $('#radioButtonDisplay01').html('You clicked Local');
        if (elfDownloads.dataType !== elfDownloads.dataTypes.dtLocal) {
            elfDownloads.dataType = elfDownloads.dataTypes.dtLocal;
            elfCallServer.loadBitly();
        } else {
            return;
        }
    } else if ($('#bitlyData').is(':checked')) {
        $('#radioButtonDisplay01').html('You clicked Bitly ');
        if (elfDownloads.dataType !== elfDownloads.dataTypes.dtBitly) {
            elfDownloads.dataType = elfDownloads.dataTypes.dtBitly;
            elfCallServer.loadBitly();
        } else {
            return;
        }
    } else if ($('#deliciousData').is(':checked')) {
        if (elfDownloads.dataType !== elfDownloads.dataTypes.dtDelicious) {
            $('#radioButtonDisplay01').html('You clicked Delicious ');
            elfDownloads.dataType = elfDownloads.dataTypes.dtDelicious;
            elfCallServer.loadDelicious();
        }
        return;
    } else if ($('#twitterData').is(':checked')) {
        if (elfDownloads.dataType !== elfDownloads.dataTypes.dtTwitter) {
            $('#radioButtonDisplay01').html('You clicked Twitter ');
            elfDownloads.dataType = elfDownloads.dataTypes.dtTwitter;
            elfCallServer.loadTwitter();
        }
        return;
    }
    elfDownloads.getLinkData();
};

elfDownloads.getLinkData = function() {
    'use strict';
    elfDownloads.clearControls();
    elfBitly.getLinks(elfDownloads.dataType);
};
