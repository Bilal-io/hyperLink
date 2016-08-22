var elfDelicious = {
    deliciousLinks: null,
    deliciousSetup: function() {
        'use strict';
        $('#search').click(elfDelicious.delicious);
        $('input[name=check]:checkbox').click(elfDelicious.displayCheckboxSelection);
        $('input[type=radio]').click(elfDelicious.displayRadioButtonSelection);
        elfDelicious.displayCheckboxSelection();
        $('#radioButtonDisplay01').html('Radios:');
    },

    /* appendUrl: function(index, deliciousLink) {
        'use strict';
        var list = '<li><a href="' + deliciousLink.u + '"</a>' + deliciousLink.d + '</li>';
        $('#viewer').append(list);
    }, */

    appendUrl: function(index, deliciousLink) {
        'use strict';
        var url = deliciousLink.u;
        var description = deliciousLink.d;
        var anchor = '<a href="' + url + '" target="_blank">' + description + '</a>';
        var details = '<a onclick="elfDelicious.detailDelicious(' + index + ')">Details</a>';
        $('#viewer').append('<li>' + anchor + ' - ' + details + '</li>');
    },

    callDelicious: function(subject) {
        'use strict';
        $('#viewer').empty();
        var feedUrl = 'http://feeds.delicious.com/v2/json/charliecalvert/' + subject;
        $.ajax({
            url: feedUrl,

            dataType: 'jsonp',

            success: function(data) {
                elfDelicious.deliciousLinks = data;
                $('#urlDelicious').empty();
                $.each(elfDelicious.deliciousLinks, function(index, deliciousLink) {
                    elfDelicious.appendUrl(index, deliciousLink);
                });
                $('#deliciousDetails').html(JSON.stringify(elfDelicious.deliciousLinks, null, 4));
            }
        });
    },

    delicious: function() {
        'use strict';
        var subject = $('#subject').val();
        elfDelicious.callDelicious(subject);
    },

    displayCheckboxSelection: function() {
        'use strict';
        var tag = '';
        var query = '';
        var options = ['javascript', 'nodejs', 'bootstrap'];

        $('#viewer').empty();

        if ($('#chJavaScript').is(':checked')) {
            $('#checkBoxDisplay').html('You clicked JavaScript');
            query += options[0];
        }

        if ($('#chNodeJs').is(':checked')) {
            $('#checkBoxDisplay').html('You clicked NodeJs');
            tag = query === '' ? '' : '+';
            query += tag + options[1];
        }

        if ($('#chBootstrap').is(':checked')) {
            $('#checkBoxDisplay').html('You clicked Bootstrap');
            tag = query === '' ? '' : '+';
            query += tag + options[2];
        }

        elfDelicious.callDelicious(query);
    },

    displayRadioButtonSelection: function() {
        'use strict';
        var id = $(this).attr('value');
        $('#radioButtonDisplay01').html('You clicked ' + id);
        elfDelicious.callDelicious(id);
    }

};

$(document).ready(function() {
    'use strict';
    elfDelicious.deliciousSetup();
});
