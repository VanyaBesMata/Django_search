$(document).ready(function() {
    $('#search-box').on('input', function() {
        var query = $(this).val();
        if (query.length >= 3) {
            $.ajax({
                url: "search_view/",
                data: {query: query},
                dataType: 'json',
                method: "POST",
                success: function(data) {
                    if (data.results.length > 0) {
                        $('#search-box').addClass('shrink');
                        var table = '<table>';
                        table += '<tr><td>' + 'name' + '</td><td>' + 'female' + '</td><td>' + 'age' + '</td><td>' + 'registration' + '</td></tr>';
                        $.each(data.results, function(index, item) {
                            table += '<tr><th>' + item.name + '</th><th>' + item.female +'</th><th>' + item.age + '<th><th>' + item.registration + '</th></tr>';
                        });
                        table += '</table>';
                        $('#results').html(table);
                    } else {
                        $('#search-box').removeClass('shrink');
                        $('#results').empty();
                    }
                }
            });
        } else {
            $('#search-box').removeClass('shrink');
            $('#results').empty();
        }
    });
});