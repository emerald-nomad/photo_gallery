// baguetteBox.run('.gallery', {
//     ignoreClass: 'hidden',
//     animation: 'slideIn'
// });

$('#searchbar').on('change paste keyup', function(e) {
    e.preventDefault();

    let query = new RegExp($(this).val(), "i");

    if ($(this).val() === '') {
        $('.gallery a').show().removeClass('hidden');
    } else {
        $('.gallery a').each((index, image) => {
            let str = $(image).attr('data-caption');
            if (str.match(query, 'i')) {
                $(image).show().removeClass('hidden');
            } else {
                $(image).hide().addClass('hidden');
            }
        });
    }

    baguetteBox.run('.gallery', {
        ignoreClass: 'hidden',
        animation: 'slideIn'
    });
});

