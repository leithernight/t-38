$(document).ready(function () {
    $('.small a').mouseenter(function (e) {
        e.preventDefault();
        if ($('.big img').attr('src') != $(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

    $('.button').click(function () {
        $('.gallery').slideToggle();
        if ($('.button').text() == '+') {
            $('.button').text('-')
        } else {
            $('.button').text('+')

        }
    });

    $('.small a img').mouseenter(function () {
        $(this).fadeTo(600, 0.6).css({
            border: '1px dotted rgb(125, 112, 165)',
            boxSizing: 'border-box',
        })
        .mouseleave(function () {
            $(this).fadeTo(0, 1).css({
                border: 'none',
            })
        })
    });

    $(document).mouseup(function () {
        $('.small a img').fadeTo(0, 1).css({
            border: 'none',
        })
    })    
})