const searchVal = $('#searchbar').val();

$('#searchbar').on('change paste keyup', function(e) {
    e.preventDefault();

    let query = new RegExp($(this).val(), "i");

    if ($(this).val() === '') {
        $('figcaption').parent().show();
    } else {
        $('figcaption').each((index, caption) => {
            $(caption).parent().hide();
            let str = $(caption).text();
            if (str.match(query, 'i')) {
                $(caption).parent().show();
            }
        });
    }
});

//console.log($('figcaption').text());