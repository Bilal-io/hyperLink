var elfHyperExplorer = {
    initialize: function() {
        'use strict';
        $('#localData').prop('checked', true);
        elfCallServer.loadBitly();
        elfBitly.getLinks(elfDownloads.dataTypes.dtLocal);
        $('#dataSource').click(elfDownloads.dataTypeSelection);
    },
    clear: function() {
        'use strict';
        $('#displayContainer').empty();
    },
};

$(document).ready(function() {
    'use strict';
    // Single Page and controls
    elfHyperExplorer.initialize();

});
