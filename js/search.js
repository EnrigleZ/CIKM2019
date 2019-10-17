jQuery(document).ready(function($) {
    'use strict';

    const infos = $('.info')

    $('#search button').on('click', function() {
        const str = $('#search input').val().trim().toLowerCase()
        const window_h = $(window).height()

        if (str.length === 0) return

        for (let i = 0; i < infos.length; ++i) {
            const node = infos.eq(i)
            const info = node[0].innerText.trim().toLowerCase()

            if (info.indexOf(str) >= 0) {
                infos.removeClass('highlight')
                node.addClass('highlight')
                $('html, body').animate({
                    scrollTop: node.offset().top - window_h / 2 + node.height() / 2
                }, 500)
                return
            }
        }

        console.log('Result not found')
    })
})