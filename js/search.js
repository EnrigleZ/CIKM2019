jQuery(document).ready(function($) {
    'use strict';

    const infos = $('.info')
    const html = $('html, body')
    let results = null

    $('#search button').on('click', function() {
        const window_h = $(window).height()
        var match_str = 'hidden trick'
        html.stop()

        if (results === null) {
            results = []

            const str = $('#search input').val().trim().toLowerCase()
            if (str && str === match_str) {
                alert('Congratulations!  O O')
                results = null
                return
            }
            if (str.length === 0) return

            for (let i = 0; i < infos.length; ++i) {
                const node = infos.eq(i)

                if (node[0].innerText.trim().toLowerCase().indexOf(str) >= 0) {
                    results.push(node)
                }
            }

            if (results.length === 0) alert('Result not found')
            else results.current_index = 0
        }

        const { current_index, length } = results
        if (length === 0) return
        // if (current_index >= length) current_index = 0
        const node = results[current_index]

        infos.removeClass('highlight')
        node.addClass('highlight')

        html.animate({
            scrollTop: node.offset().top - window_h / 2 + node.height() / 2
        }, 500)

        results.current_index += 1
        if (results.current_index === length) results.current_index = 0
    })

    $('#search input').on('input', function(e) {
        results = null
    })

    $('#search input').keypress(function(e) {
        if (e.keyCode === 13) $('#search button').click()
    })
})