var elfDisplay = {
    render: function() {
        'use strict';
        var index = elfBitly.linkIndex;
        var bitlyLink = elfBitly.bitlyLinks.data.link_history[index];
        elfDisplay.showRecord(bitlyLink);
    },

    renderTable: function(links) {
        'use strict';
        $('#tableLinks').empty();
        $.each(links, function(index, link) {
            var title = '<th><a href="' + link.keyword_link + '">' + link.title + '</a></th>';
            var keyword = '<th><a class="pull-right" onclick="elfDisplay.displayImage(' + index + ')">Details</a></th>';
            var tableRowStart = '<tr class="linkTitle" index=' + index + '>';
            $('#tableLinks').append(tableRowStart + title + keyword + '</tr>');
        });
        $('.linkTitle').click(elfDisplay.showTableSelection);
    },
    hyperlinkUrl: function(index, text, url) {
        'use strict';
        var anchor = '<a href="' + url + '" target="_blank">' + text + '</a>';
        var details = '<a onclick="elfDisplay.displayImage(' + index + ')">Details</a>';
        return {
            title: anchor,
            keyword: details
        };
    },

    displayImage: function(index) {
        'use strict';
        var link = elfBitly.getLinkHistoryItem(index);
        $('#image').attr('src', link.keyword_link);
    },

    showRecord: function(bitlyLink) {
        'use strict';
        // with jquery
        if (bitlyLink.private) {
            $('#checkBoxPrivate').prop('checked', true);
        } else {
            $('#checkBoxPrivate').prop('checked', false);
        }

        // With the JavaScript DOM:
        if (bitlyLink.archived) {
            $('#checkBoxArchived').prop('checked', true);
        } else {
            $('#checkBoxArchived').prop('checked', false);
        }

        $('#keywordLink').val(bitlyLink.keyword_link);
        $('#title').val(bitlyLink.title);
        $('#aggregateLink').val(bitlyLink.aggregate_link);
        $('#longUrl').val(bitlyLink.long_url);
        $('#clientId').val(bitlyLink.client_id);
        $('#link').val(bitlyLink.link);
        $('#userTs').val(new Date(bitlyLink.user_ts * 1000));
        $('#createdAt').val(new Date(bitlyLink.created_at * 1000));
        $('#modifiedAt').val(new Date(bitlyLink.modified_at * 1000));
    },

    showTableSelection: function(event) {
        'use strict';
        var index = $(event.currentTarget).attr('index');
        var link = elfBitly.getLinkHistory(index, true);
        elfDisplay.showRecord(link);
    },

};
