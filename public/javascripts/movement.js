var elfMovement = {
    left: function() {
        'use strict';
        if (elfBitly.linkIndex > 0) {
            elfBitly.linkIndex -= 1;
            elfDisplay.render();
        }
    },

    right: function() {
        'use strict';
        var history = elfBitly.getLinkHistoryArray();
        if (elfBitly.linkIndex < history.length - 1) {
            elfBitly.linkIndex += 1;
            elfDisplay.render();
        }
    }
};
